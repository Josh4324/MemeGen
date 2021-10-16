import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import axios from "axios";

export default function Meme() {
    const Sref = useRef("");
    const Pref = useRef("");
    const Eref = useRef("");
    const Cref = useRef("");
    const imageRef = useRef("");
    const fileRef = useRef("");
    const svgRef = useRef("");

    const [file, setfile] = useState("");
    const [rimag, setRIMG] = useState("")
    const [imgState, setImgState] = useState(false);
    const [s, setS] = useState("");
    const [p, setP] = useState("");
    const [e, setE] = useState("");
    const [c, setC] = useState("");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [base64, setBase64] = useState("");
    const [base641, setBase641] = useState("");
    const [detail, setDetail] = useState({});
    const textStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        textTransform: "capitalize",
        fill: "#FFF",
        userSelect: "none"
    }
    const boldTextStyle = {
        fontSize: "40px", 
        fontWeight: "bolder",
        strokeWidth: "2",
        stroke: "black",
        zIndex: 1,
        textTransform: "capitalize",
        fontFamily: "Futura, Impact, Arial",
        fill: "#FFF",
        userSelect: "none"
    }

    const initialState = {
        toptext: "",
        bottomtext: "",
        isTopDragging: false,
        isBottomDragging: false,
        topY: "10%",
        topX: "50%",
        bottomX: "50%",
        bottomY: "90%"
    }

    const [current, setCurrent] = useState(initialState);

    useEffect(() => {
        console.log("render")
        return () => {
        }
    }, [base64])

    const getBase64Image = (img) => {
        console.log(img)
        img.crossOrigin = '*';
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            setWidth(img.width);
            canvas.height = img.height;
            setHeight(img.height)
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, 400, 400)
            console.log("can", canvas);
            const dataURL = canvas.toDataURL("image/png");
            console.log(dataURL);
            setImgState(true);
            setBase64(dataURL);
            return dataURL;
        }

    }

    const generateMeme = (img) => {
        console.log(img);
        console.log(Sref, Pref, Eref, Cref)
        if (!img) {
            fileRef.current.value = "";
            return NotificationManager.error("Please select an image", "Error");
        }
        if (Sref.current.value === "") {
            fileRef.current.value = "";
            return NotificationManager.error("Please enter your S value", "Error")
        }
        if (Pref.current.value === "") {
            fileRef.current.value = "";
            return NotificationManager.error("Please enter your P value", "Error")
        }
        if (Eref.current.value === "") {
            fileRef.current.value = "";
            return NotificationManager.error("Please enter your E value", "Error")
        }
        if (Cref.current.value === "") {
            fileRef.current.value = "";
            return NotificationManager.error("Please enter your C value", "Error")
        }
        setS(Sref.current.value);
        setP(Pref.current.value);
        setE(Eref.current.value);
        setC(Cref.current.value);
        const image = img;
        const base_image = new Image();
        base_image.src = image;
        console.log(base_image);
        const base64 = getBase64Image(base_image);
        setBase64(base64);
        setTimeout(() => { convertSvgToImage2() }, 3000)


    }

    const convertSvgToImage = () => {
        NotificationManager.info("Downloading Meme", "info");
        console.log(svgRef.current);
        let svgData = new XMLSerializer().serializeToString(svgRef.current);
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        const svgSize = svgRef.current.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
        img.onload = function () {
            canvas.getContext("2d").drawImage(img, 0, 0);
            const canvasdata = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.download = "meme.png";
            a.href = canvasdata;
            document.body.appendChild(a);
            a.click();
        };
    }

    const convertSvgToImage2 = async () => {
        console.log(svgRef.current);
        let svgData = new XMLSerializer().serializeToString(svgRef.current);
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        const svgSize = svgRef.current.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
        img.onload = function async() {
            canvas.getContext("2d").drawImage(img, 0, 0);
            const canvasdata = canvas.toDataURL("image/png");
            let run = async () => {
                console.log("canvasdata", canvasdata);
                let formData = new FormData();
                formData.append("picture", canvasdata);
                const result = await postImage2(formData);
                setRIMG(result.data)
                console.log(result);
            }
            run();

            /* const a = document.createElement("a");
            a.download = "meme.png";
            a.href = canvasdata;
            document.body.appendChild(a);
            a.click(); */
        };
    }

    const postImage = async (userCred) => {
        try {
            const res = await axios.patch(`https://www.checkspecstatus.com/api/v1/image`, userCred);
            console.log(res);
            return res.data;
        } catch (err) {
            return err;
        }
    };

    const postImage2 = async (userCred) => {
        try {
            const res = await axios.patch(`https://www.checkspecstatus.com/api/v1/image/finish`, userCred);
            console.log(res);
            return res.data;
        } catch (err) {
            return err;
        }
    };

    const imageSubmit = async (evt) => {
        NotificationManager.info("Image Upload in progress", "Info")
        evt.preventDefault();

        const file = fileRef.current.files[0];

        let formData = new FormData();
        formData.append("picture", file);


        const result = await postImage(formData);
        console.log(result);
        if (result.code === 200) {
            NotificationManager.info("Generating Meme", "Info")
            generateMeme(result.data);
            setfile(result.data)
        } else {
            fileRef.current.value = "";
            NotificationManager.error("Error uploading Image", "Error")
        }

    }

    const reset = () => {
        setImgState(false);
    }



    return (
        <div className="wrapper-home" style={{ backgroundImage: "url(images/bg-new-2.jpg)" }}>
            <header className="header">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <Link to="/" className="logo">
                                <img src="images/2sure-logo.png" style={{ height: "80px" }} />
                            </Link>
                        </div>
                        <div class="col-6 text-right">
                            {/* <Link to="/" className = "logo">
                    <img src="images/logo.svg"/>
                </Link> */}
                        </div>
                    </div>

                </div>
            </header>
            <div className="box">
                <h3 className="spec-header">Spec Meme Generator</h3>
                {
                    imgState === true ? (null) : (<div className="form-box">
                        <p className="spec-sub-header">Enter your Details to generate your Spec Meme</p>
                        <div className="flex form-group">
                            <div className="text">S</div>
                            <input className="meme-input form-control" ref={Sref} type="text" />
                        </div>
                        <div className="flex form-group">
                            <div className="text">P</div>
                            <input className="meme-input form-control" ref={Pref} type="text" />
                        </div>
                        <div className="flex form-group">
                            <div className="text">E</div>
                            <input className="meme-input form-control" ref={Eref} type="text" />
                        </div>
                        <div className="flex form-group">
                            <div className="text">C</div>
                            <input className="meme-input form-control" ref={Cref} type="text" />
                        </div>
                        <div className="upload-btn-wrapper">
                            <button class="btn"><i class="fas fa-camera"></i> Upload your photo</button>
                            <input type="file" onChange={imageSubmit} name="file" id="file" ref={fileRef} class="input-file" />
                        </div>
                    </div>)
                }



                {
                    imgState === true ? (<div className="meme" >

                        {
                            base64 ? (
                                <svg
                                    width={300}
                                    id="svg_ref"
                                    height={300}
                                    ref={svgRef}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <defs>

                                    </defs>

                                    <g> <image
                                        xlinkHref={base64}
                                        height={300}
                                        width={300}
                                    /></g>
                                    <g>
                                        <rect x={"15px"}
                                            y={"15px"} width={270} height={270} style={{ stroke: "green", fill: "none", strokeWidth: 1 }} opacity={0.5} />
                                    </g>
                                    <g>
                                        <rect width={600} height={600} style={{ fill: "green", }} opacity={0.4} />
                                    </g>




                                    <rect x={"39px"}
                                        y={"70px"} height="20" width="52" style={{ fill: "white" }}>
                                    </rect>
                                    <text
                                        style={{ fill: "#20b832", backgroundColor: "red", fontFamily: "Arial", fontSize: "12px", fontWeight: "normal" }}
                                        x={"45px"}
                                        y={"81px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {"I AM A"}
                                    </text>


                                    <text
                                        style={{ ...boldTextStyle }}
                                        x={"39px"}
                                        y={"115px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        s
                                    </text>
                                    <text
                                        style={{ ...textStyle, zIndex: 1, stroke: "black", strokeWidth: "1.5", fontFamily: "Arial" }}
                                        x={"69px"}
                                        y={"115px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {s}
                                    </text>
                                    <text
                                        style={{ ...boldTextStyle }}
                                        x={"39px"}
                                        y={"160px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        p
                                    </text>
                                    <text
                                        style={{ ...textStyle, stroke: "black", strokeWidth: "1.5", fontFamily: "Arial", zIndex: 1 }}
                                        x={"69px"}
                                        y={"160px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {p}
                                    </text>
                                    <text
                                        style={{ ...boldTextStyle  }}
                                        x={"39px"}
                                        y={"205px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        e
                                    </text>
                                    <text
                                        style={{ ...textStyle, stroke: "black", strokeWidth: "1.5", fontFamily: "Arial", zIndex: 1 }}
                                        x={"69px"}
                                        y={"205px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {e}
                                    </text>
                                    <text
                                        style={{  ...boldTextStyle  }}
                                        x={"39px"}
                                        y={"250px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        c
                                    </text>
                                    <text
                                        style={{ ...textStyle, stroke: "black", strokeWidth: "1.5", fontFamily: "Arial", zIndex: 1 }}
                                        x={"69px"}
                                        y={"250px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {c}
                                    </text>

                                    <line x1="100" y1="520" x2="500" y2="520" style={{ stroke: "white", strokeWidth: 1 }} />

                                    <text
                                        style={{ ...textStyle, stroke: "black", margin: "5px", strokeWidth: "1", zIndex: 1, fontSize: "20px", fontFamily: "Arial" }}
                                        x={"110px"}
                                        y={"550px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {s}
                                    </text>
                                    <text
                                        style={{ ...textStyle, stroke: "black", strokeWidth: "1", zIndex: 1, fontSize: "20px", fontFamily: "Arial" }}
                                        x={"210px"}
                                        y={"550px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {p}
                                    </text>
                                    <text
                                        style={{ ...textStyle, padding: "5px", stroke: "black", strokeWidth: "1", zIndex: 1, fontSize: "20px", fontFamily: "Arial" }}
                                        x={"310px"}
                                        y={"550px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {e}
                                    </text>
                                    <text
                                        style={{ ...textStyle, stroke: "black", strokeWidth: "1", zIndex: 1, fontSize: "20px", fontFamily: "Arial" }}
                                        x={"410px"}
                                        y={"550px"}
                                        dominantBaseline="middle"
                                        textAnchor="start"
                                    >
                                        {c}
                                    </text>


                                </svg>) : (null)
                        }
                        <button className="btn btn-block download-button px-2 mt-3" onClick={convertSvgToImage}><i class="fas fa-download"></i> Download Meme</button>
                        {/* <button className="button btn btn-block download-button px-2" onClick={reset} >Create Meme</button> */}

                        <div class="share-button text-center mt-4">

                            <div class="share-text mt-3 mb-1">Share on:</div>


                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3"
                                href={`https://www.facebook.com/sharer.php?u=${rimag}`}>
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3" href={`https://twitter.com/share?text=I just checked generated my spec meme. You can generate yours at at https://meme.checkspecstatus.com, check it out - ${rimag}`}><i class="fab fa-twitter-square"></i></a>
                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3"
                                href={`whatsapp://send?text=I just checked generated my spec meme. You can generate yours at at https://meme.checkspecstatus.com, check it out - ${rimag}`}>
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3"
                                href="https://www.instagram.com">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>) : (null)
                }
            </div>

            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <Link to="/privacy" style={{ color: "white" }}>
                                
                                    <span>TERMS OF USE/ PRIVACY</span>
                                
                            </Link>
                        </div>

                        <div class="col-6 text-right">
                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3"
                                href="https://www.facebook.com/2SureNigeria/">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3"
                                href="https://www.instagram.com/2sureng/">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a
                                target="_blank"
                                style={{ color: "white" }}
                                rel="noopener noreferrer"
                                className="share-button mr-3" href="https://www.twitter.com/2SureNG/"><i class="fab fa-twitter-square"></i></a>

                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
