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
    const boldTextStyle = {
        fontSize: "80px",
        fontWeight: "bolder",
        strokeWidth: "2",
        stroke: "black",
        zIndex: 1,
        textTransform: "capitalize",
        fontFamily: "Arial",
        fill: "#FFF",
        userSelect: "none"
    }
    const textStyle = {
        fontSize: "40px",
        fontWeight: "bold",
        textTransform: "lowercase",
        fill: "#FFF",
        userSelect: "none",
        stroke: "black",
        strokeWidth: "1.5",
        fontFamily: "Arial",
        zIndex: 1,
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
    }, [])

    const getBase64Image = async (img, s, p, e, c) => {

        img.crossOrigin = '*';
        img.onload = async () => {
            //const canvas1 = document.createElement("canvas");
            const canvas = document.getElementById("canvas")
            canvas.width = img.width;
            setWidth(img.width);
            canvas.height = img.height;
            setHeight(img.height);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, 600, 600);
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, 600, 600);

            ctx.strokeStyle = 'green';
            ctx.strokeRect(15, 15, 570, 570);
            ctx.globalAlpha = 1;
            ctx.fillStyle = "white";
            ctx.strokeStyle = 'green';
            ctx.fillRect(50, 30, 60, 20);

            ctx.fillStyle = "green";
            ctx.font = "14px Futura";
            ctx.fillText("I AM A", 58, 45);
            ctx.fillStyle = "white";
            ctx.font = "40px GothamCond-Black";
            ctx.fillText("S", 50, 100);
            ctx.font = "20px Futura";
            ctx.fillText(s, 100, 90);
            ctx.font = "40px GothamCond-Black";
            ctx.fillText("P", 50, 150);
            ctx.font = "20px Futura";
            ctx.fillText(p, 100, 140);
            ctx.font = "40px GothamCond-Black";
            ctx.fillText("E", 50, 200);
            ctx.font = "20px Futura";
            ctx.fillText(e, 100, 190);
            ctx.font = "40px GothamCond-Black";
            ctx.fillText("C", 50, 250);
            ctx.font = "20px Futura";
            ctx.fillText(c, 100, 240);



            console.log("can", canvas);
            const dataURL = canvas.toDataURL("image/jpeg", 1.0);

            let formData = new FormData();
            formData.append("picture", dataURL);
            const result = await postImage2(formData);
            console.log(result.data);
            setRIMG(result.data);
            setImgState(true);
            setBase64(dataURL);
            return dataURL;
        }

    }

    const generateMeme = async (img) => {
        console.log(Sref.current.value, Pref.current.value)
        setS(Sref.current.value);
        setP(Pref.current.value);
        setE(Eref.current.value);
        setC(Cref.current.value);
        const image = img;
        const base_image = new Image();
        base_image.src = image;
        console.log(base_image);
        let s, p, e, c
        if (Sref.current.value[0].toLowerCase() === "s") {
            s = Sref.current.value.slice(1,).toLowerCase()
        } else {
            s = Sref.current.value.toLowerCase();
        }
        if (Pref.current.value[0].toLowerCase() === "p") {
            p = Pref.current.value.slice(1,).toLowerCase()
        } else {
            p = Pref.current.value.toLowerCase();
        }
        if (Eref.current.value[0].toLowerCase() === "e") {
            e = Eref.current.value.slice(1,).toLowerCase()
        } else {
            e = Eref.current.value.toLowerCase();
        }
        if (Cref.current.value[0].toLowerCase() === "c") {
            c = Cref.current.value.slice(1,).toLowerCase()
        } else {
            c = Cref.current.value.toLowerCase();
        }

        const base64 = getBase64Image(base_image, s, p, e, c);
        //setBase64(base64);

    }

    const DgenerateMeme = async (img) => {
        const image = img;
        const base_image = new Image();
        base_image.src = image;
        const base64 = DgetBase64Image(base_image);
        setBase64(base64);

    }

    const DgetBase64Image = async (img) => {
        img.crossOrigin = '*';
        img.onload = async () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            setWidth(img.width);
            canvas.height = img.height;
            setHeight(img.height)
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, 600, 600);
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, 600, 600);

            ctx.strokeStyle = 'green';
            ctx.strokeRect(15, 15, 570, 570);

            ctx.fillStyle = "white";
            ctx.globalAlpha = 1;
            ctx.font = "40px GothamCond";
            ctx.fillText("S", 30, 50);

            ctx.font = "40px GothamCond";
            ctx.fillText("P", 30, 100);
            ctx.fillText("E", 30, 150);
            ctx.fillText("C", 30, 200);



            console.log("can", canvas);
            const dataURL = canvas.toDataURL("image/jpeg", 1.0);

            const a = document.createElement("a");
            a.download = "meme.jpg";
            a.href = dataURL;
            document.body.appendChild(a);
            a.click();
            setImgState(true);
            setBase64(dataURL);
            return dataURL;
        }

    }

    const convertSvgToImage = () => {
        NotificationManager.info("Downloading Meme", "info");
        const canvas = document.getElementById("canvas")
        const dataURL = canvas.toDataURL("image/jpeg", 1.0);
        const a = document.createElement("a");
        a.download = "meme.png";
        a.href = dataURL;
        document.body.appendChild(a);
        a.click();

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
            const canvasdata = canvas.toDataURL("image/jpeg", 1.0);
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

        const maxAllowedSize = 5 * 1024 * 1024;
        if (fileRef.current.files[0].size > maxAllowedSize) {
            NotificationManager.error("Image size greater than 5mb", "Error");
            fileRef.current.value = "";
        }
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
                            <input type="file" onChange={imageSubmit} name="file" accept="image/png, image/jpeg" id="file" ref={fileRef} class="input-file" />
                        </div>
                        <span style={{ fontFamily: "GothamCond-Black", color: '#000' }}>G</span>
                    </div>)
                }

                <canvas id="canvas" />
                {
                    imgState === true ? (<div className="meme" >

                        <img src={rimag} />
                        <button className="btn btn-block download-button px-2 mt-3" onClick={convertSvgToImage}><i class="fas fa-download"></i> Download Meme</button>
                        {
                            rimag.length === 0 ? (<img src="images/loading.gif" />) : null
                        }

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
