import React, { useState, useEffect, useRef } from 'react';
import { NotificationManager } from 'react-notifications';


export default function Meme() {
    const Sref = useRef("");
    const Pref = useRef("");
    const Eref = useRef("");
    const Cref = useRef("");
    const imageRef = useRef("");
    const svgRef = useRef("");

    const [file, setfile] = useState("");
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
        fontSize: "60px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fill: "#FFF",
        stroke: "#000",
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


    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'josh4324',
        uploadPreset: 'hq1e5jub'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            setfile(result.info.secure_url)
            setDetail(result.info);
            console.log(result.info);
        }
    }
    )

    const showWidget = (evt) => {
        evt.preventDefault();
        //setFile(null);
        myWidget.open();
    }

    const getBase64Image = (img) => {
        console.log(img)
        img.crossOrigin = '*';
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0)
            console.log("can", canvas);
            const dataURL = canvas.toDataURL("image/png");
            console.log(dataURL);
            setBase64(dataURL);
            return dataURL;
        }

    }

    const generateMeme = () => {
        if (file === "") {
            return NotificationManager.error("Please select an image", "Error");
        }
        if (Sref.current.value === "") {
            return NotificationManager.error("Please enter your S value", "Error")
        }
        if (Pref.current.value === "") {
            return NotificationManager.error("Please enter your P value", "Error")
        }
        if (Eref.current.value === "") {
            return NotificationManager.error("Please enter your E value", "Error")
        }
        if (Cref.current.value === "") {
            return NotificationManager.error("Please enter your C value", "Error")
        }
        setS(Sref.current.value);
        setP(Pref.current.value);
        setE(Eref.current.value);
        setC(Cref.current.value);
        const image = file;
        const base_image = new Image();
        base_image.src = image;
        console.log(base_image);
        const base64 = getBase64Image(base_image);
        setBase64(base64);

    }

    const convertSvgToImage = () => {
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



    return (
        <div>
            <div className="box">
                <div className="form-box">
                    <h4>Enter your Details to generate your Spec Meme</h4>
                    <div className="flex">
                        <div className="text">S</div>
                        <input className="meme-input" ref={Sref} type="text" />
                    </div>
                    <div className="flex">
                        <div className="text">P</div>
                        <input className="meme-input" ref={Pref} type="text" />
                    </div>
                    <div className="flex">
                        <div className="text">E</div>
                        <input className="meme-input" ref={Eref} type="text" />
                    </div>
                    <div className="flex">
                        <div className="text">C</div>
                        <input className="meme-input" ref={Cref} type="text" />
                    </div>
                    <button className="button" onClick={showWidget}>Upload your fav picture</button>
                    <button className="button" onClick={generateMeme}>Generate Meme</button>

                </div>
            </div>

            <div className="meme">
                {
                    base64 ? (<svg
                        width={600}
                        id="svg_ref"
                        height={600}
                        ref={svgRef}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g> <image
                            xlinkHref={base64}
                            height={600}
                            width={600}
                        /></g>
                        <g>
                            <rect x={"15px"}
                                y={"15px"} width={570} height={570} style={{ stroke: "green", fill: "none", strokeWidth: 1 }} opacity={0.5} />
                        </g>
                        <g>
                            <rect width={600} height={600} style={{ fill: "green", }} opacity={0.4} />
                        </g>




                        <rect x={"92px"}
                            y={"133px"} height="30" width="80" style={{ fill: "white" }}>
                        </rect>
                        <text
                            style={{ fill: "#20b832", backgroundColor: "red", fontFamily: "Futura", fontSize: "20px", fontWeight: "bolder" }}
                            x={"100px"}
                            y={"150px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {"I AM A"}
                        </text>


                        <text
                            style={{ ...textStyle, fontFamily: "Futura", zIndex: 1, fontSize: "70px", fontWeight: "bolder" }}
                            x={"100px"}
                            y={"220px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            s
                        </text>
                        <text
                            style={{ ...textStyle, zIndex: 1, fontFamily: "GothamCond" }}
                            x={"170px"}
                            y={"220px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {s}
                        </text>
                        <text
                            style={{ ...textStyle, fontFamily: "Futura", fontSize: "70px", fontWeight: "bolder", zIndex: 1 }}
                            x={"100px"}
                            y={"290px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            p
                        </text>
                        <text
                            style={{ ...textStyle, fontFamily: "GothamCond", zIndex: 1 }}
                            x={"170px"}
                            y={"290px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {p}
                        </text>
                        <text
                            style={{ ...textStyle, fontFamily: "Futura", fontSize: "70px", fontWeight: "bolder", zIndex: 1 }}
                            x={"100px"}
                            y={"360px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            e
                        </text>
                        <text
                            style={{ ...textStyle, fontFamily: "GothamCond", zIndex: 1 }}
                            x={"170px"}
                            y={"360px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {e}
                        </text>
                        <text
                            style={{ ...textStyle, fontFamily: "Futura", fontSize: "70px", fontWeight: "bolder", zIndex: 1 }}
                            x={"100px"}
                            y={"430px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            c
                        </text>
                        <text
                            style={{ ...textStyle, fontFamily: "GothamCond", zIndex: 1 }}
                            x={"170px"}
                            y={"430px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {c}
                        </text>

                        <line x1="100" y1="520" x2="500" y2="520" style={{ stroke: "white", strokeWidth: 1 }} />

                        <text
                            style={{ ...textStyle, zIndex: 1, fontSize: "20px", fontFamily: "GothamCond" }}
                            x={"110px"}
                            y={"550px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {s}
                        </text>
                        <text
                            style={{ ...textStyle, zIndex: 1, fontSize: "20px", fontFamily: "GothamCond" }}
                            x={"210px"}
                            y={"550px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {p}
                        </text>
                        <text
                            style={{ ...textStyle, zIndex: 1, fontSize: "20px", fontFamily: "GothamCond" }}
                            x={"310px"}
                            y={"550px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {e}
                        </text>
                        <text
                            style={{ ...textStyle, zIndex: 1, fontSize: "20px", fontFamily: "GothamCond" }}
                            x={"410px"}
                            y={"550px"}
                            dominantBaseline="middle"
                            textAnchor="start"
                        >
                            {c}
                        </text>

                        {/* <text
                            style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                            x={this.state.topX}
                            y={this.state.topY}
                            dominantBaseline="middle"
                            textAnchor="middle"
                            onMouseDown={event => this.handleMouseDown(event, 'top')}
                            onMouseUp={event => this.handleMouseUp(event, 'top')}
                        >
                            {this.state.toptext}
                        </text>
                        <text
                            style={textStyle}
                            dominantBaseline="middle"
                            textAnchor="middle"
                            x={this.state.bottomX}
                            y={this.state.bottomY}
                            onMouseDown={event => this.handleMouseDown(event, 'bottom')}
                            onMouseUp={event => this.handleMouseUp(event, 'bottom')}
                        >
                            {this.state.bottomtext}
                        </text> */}
                    </svg>) : (null)
                }
                <button className="button" onClick={convertSvgToImage}>Download Meme</button>
            </div>
        </div >
    )
}
