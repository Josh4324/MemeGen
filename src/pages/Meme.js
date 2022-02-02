/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";
const APIurl = "https://defineyourspec.com";

export default function Meme() {
  const Sref = useRef("");
  const Pref = useRef("");
  const Eref = useRef("");
  const Cref = useRef("");
  const fileRef = useRef("");
  const emailRef = useRef("");

  const [rimag, setRIMG] = useState("");
  const [newimg, setNewImg] = useState("");
  const [imgState, setImgState] = useState(false);
  const [imgState2, setImgState2] = useState(false);
  const [imgState3, setImgState3] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const getBase64Image = async (img, s, p, e, c) => {
    img.crossOrigin = "*";
    img.onload = async () => {
      const canvas = document.getElementById("canvas");
      canvas.width = img.width;
      setWidth(img.width);
      canvas.height = img.height;
      setHeight(img.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 600, 600);
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 600, 600);

      ctx.strokeStyle = "#2fa703";
      ctx.strokeRect(15, 15, 570, 570);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "white";
      ctx.strokeStyle = "green";
      ctx.fillRect(40, 175, 72, 27);

      ctx.fillStyle = "green";
      ctx.font = "16px Futura";
      ctx.fillText("I AM A", 46, 193);
      ctx.fillStyle = "white";
      ctx.font = "80px GothamCond-Black";
      ctx.fillText("S", 39, 270);
      ctx.font = "40px Futura";
      ctx.fillText(s, 80, 260);
      ctx.font = "80px GothamCond-Black";
      ctx.fillText("P", 39, 355);
      ctx.font = "40px Futura";
      ctx.fillText(p, 80, 350);
      ctx.font = "80px GothamCond-Black";
      ctx.fillText("E", 39, 442);
      ctx.font = "40px Futura";
      ctx.fillText(e, 80, 436);
      ctx.font = "80px GothamCond-Black";
      ctx.fillText("C", 39, 525);
      ctx.font = "40px Futura";
      ctx.fillText(c, 80, 515);

      ctx.font = "20px Futura";
      ctx.fillText("@2Sureng", 480, 555);

      const logo_image = new Image();
      logo_image.src = "images/2sure-logo.png";
      ctx.drawImage(logo_image, 502, 492, 54, 40);

      const dataURL = canvas.toDataURL("image/jpeg", 1.0);

      let formData = new FormData();
      formData.append("picture", dataURL);
      const result = await postImage2(formData);
      setImgState(true);
      setRIMG(result.data);
    };
  };

  const generateMeme = async (img) => {
    const image = img;
    const base_image = new Image();
    base_image.src = image;
    let s = localStorage.getItem("s");
    let p = localStorage.getItem("p");
    let e = localStorage.getItem("e");
    let c = localStorage.getItem("c");

    if (s[0].toLowerCase() === "s") {
      s = s.slice(1).toLowerCase();
    } else {
      s = s.toLowerCase();
    }
    if (p[0].toLowerCase() === "p") {
      p = p.slice(1).toLowerCase();
    } else {
      p = p.toLowerCase();
    }
    if (e[0].toLowerCase() === "e") {
      e = e.slice(1).toLowerCase();
    } else {
      e = e.toLowerCase();
    }
    if (c[0].toLowerCase() === "c") {
      c = c.slice(1).toLowerCase();
    } else {
      c = c.toLowerCase();
    }

    const base64 = getBase64Image(base_image, s, p, e, c);
  };

  const convertSvgToImage = () => {
    NotificationManager.info("Downloading Meme", "info");
    const a = document.createElement("a");
    a.download = "meme.png";
    a.href = rimag;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
  };

  const postImage2 = async (userCred) => {
    try {
      const res = await axios.patch(`${APIurl}/api/v1/image/finish`, userCred);
      return res.data;
    } catch (err) {
      return err;
    }
  };

  const imageSubmit = async (evt) => {
    if (Sref.current.value === "") {
      fileRef.current.value = "";
      return NotificationManager.error("Please enter your S value", "Error");
    }
    if (Pref.current.value === "") {
      fileRef.current.value = "";
      return NotificationManager.error("Please enter your P value", "Error");
    }
    if (Eref.current.value === "") {
      fileRef.current.value = "";
      return NotificationManager.error("Please enter your E value", "Error");
    }
    if (Cref.current.value === "") {
      fileRef.current.value = "";
      return NotificationManager.error("Please enter your C value", "Error");
    }

    if (emailRef.current.value === "") {
      return NotificationManager.error("Please enter your email", "Error");
    }
    localStorage.removeItem("s");
    localStorage.removeItem("p");
    localStorage.removeItem("e");
    localStorage.removeItem("c");

    localStorage.setItem("s", Sref.current.value);
    localStorage.setItem("p", Pref.current.value);
    localStorage.setItem("e", Eref.current.value);
    localStorage.setItem("c", Cref.current.value);

    //email
    try {
      const res = await axios.post(`${APIurl}/api/v1/detail`, {
        social: emailRef.current.value,
        number: "",
      });
    } catch (err) {
      console.log(err);
    }

    const maxAllowedSize = 5 * 1024 * 1024;
    if (fileRef.current.files[0].size > maxAllowedSize) {
      NotificationManager.error("Image size greater than 5mb", "Error");
      fileRef.current.value = "";
    }
    NotificationManager.info("Image Upload in progress", "Info");
    evt.preventDefault();

    const file = fileRef.current.files[0];

    let formData = new FormData();
    formData.append("picture", file);

    setImgState2(true);
    //const result = await postImage(formData);
    let url = URL.createObjectURL(file);
    setNewImg(url);
  };

  let cropper;
  useEffect(() => {
    if (newimg.length > 0) {
      cropper = new Cropper(document.getElementById("image"), {
        viewMode: 0,
        aspectRatio: 1,
        zoomable: true,
        center: true,
        modal: true,
        autoCropArea: 0.8,
        autoCrop: true,
        preview: ".preview",

        crop(event) {
          console.log(event.detail.x);
          console.log(event.detail.y);
          console.log(event.detail.width);
          console.log(event.detail.height);
          console.log(event.detail.rotate);
          console.log(event.detail.scaleX);
          console.log(event.detail.scaleY);
        },
      });
    }
  }, [newimg]);

  const getImage = async () => {
    NotificationManager.info("Generating Meme", "Info");
    const ff = cropper
      .getCroppedCanvas({
        imageSmoothingEnabled: false,
        imageSmoothingQuality: "high",
        width: 600,
        height: 600,
      })
      .toDataURL();

    setImgState3(true);
    generateMeme(ff);
  };

  return (
    <div
      className="wrapper-home"
      style={{ backgroundImage: "url(images/bg-new-2.jpg)" }}
    >
      <header className="header">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <a href="/" className="logo">
                <img src="images/2sure-logo.png" style={{ height: "80px" }} />
              </a>
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
        {imgState2 === true ? null : imgState === true ? null : (
          <div className="form-box">
            <p className="spec-sub-header">
              Enter your Details to generate your Spec Meme
            </p>
            <div className="flex form-group">
              <div className="text">S</div>
              <input
                className="meme-input form-control"
                ref={Sref}
                type="text"
              />
            </div>
            <div className="flex form-group">
              <div className="text">P</div>
              <input
                className="meme-input form-control"
                ref={Pref}
                type="text"
              />
            </div>
            <div className="flex form-group">
              <div className="text">E</div>
              <input
                className="meme-input form-control"
                ref={Eref}
                type="text"
              />
            </div>
            <div className="flex form-group">
              <div className="text">C</div>
              <input
                className="meme-input form-control"
                ref={Cref}
                type="text"
              />
            </div>
            <div className="flex form-group">
              <div className="text">Email</div>
              <input
                className="meme-input form-control"
                ref={emailRef}
                type="text"
              />
            </div>
            <div className="upload-btn-wrapper">
              <button class="btn">
                <i class="fas fa-camera"></i> Upload your photo
              </button>
              <input
                type="file"
                onInput={imageSubmit}
                name="file"
                accept="image/png, image/jpeg"
                id="file"
                ref={fileRef}
                class="input-file"
              />
            </div>
            <span style={{ fontFamily: "GothamCond-Black", color: "#000" }}>
              G
            </span>
          </div>
        )}
        {rimag.length === 0 && imgState3 === true ? (
          <img
            src="images/loading.gif"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "150px",
              display: "block",
            }}
          />
        ) : null}
        <canvas id="canvas" />
        {imgState === true ? (
          <div className="meme">
            <img src={rimag} style={{ maxWidth: "100%", display: "block" }} />
            <button
              className="btn btn-block download-button px-2 mt-3"
              onClick={convertSvgToImage}
            >
              <i class="fas fa-download"></i> Download Meme
            </button>

            {/* <button className="button btn btn-block download-button px-2" onClick={reset} >Create Meme</button> */}

            <div class="share-button text-center mt-4">
              <div class="share-text mt-3 mb-1">Share on:</div>

              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                className="share-button mr-3"
                href={`https://www.facebook.com/sharer.php?u=${rimag}`}
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                className="share-button mr-3"
                href={`https://twitter.com/share?text=I just checked generated my spec meme. You can generate yours at at https://defineyourspec.com.com, check it out - ${rimag}`}
              >
                <i class="fab fa-twitter-square"></i>
              </a>
              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                className="share-button mr-3"
                href={`whatsapp://send?text=I just checked generated my spec meme. You can generate yours at at https://defineyourspec.com.com, check it out - ${rimag}`}
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                className="share-button mr-3"
                href="https://www.instagram.com"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ) : null}
        {newimg.length > 0 && imgState === false ? (
          <p className="spec-sub-header">
            Adjust your photo within the crop area. You can pinch to zoom or
            expand crop area as required
          </p>
        ) : null}
        {newimg.length === 0 && imgState2 === true ? (
          <img
            src="images/loading.gif"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "150px",
              display: "block",
            }}
          />
        ) : null}
        {imgState3 === true ? null : (
          <div>
            <div>
              <img
                style={{ maxWidth: "100%", display: "block" }}
                id="image"
                src={newimg}
              />
            </div>

            {
              <div>
                {newimg.length > 0 ? (
                  <button
                    className="btn btn-block download-button px-2 mt-3"
                    onClick={getImage}
                  >
                    Done
                  </button>
                ) : null}
              </div>
            }
          </div>
        )}
      </div>

      {/*   <div class="preview" style={{width:"600px", height:"600px", overflow:"hidden"}}></div> */}
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
                href="https://www.facebook.com/2SureNigeria/"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                className="share-button mr-3"
                href="https://www.instagram.com/2sureng/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                className="share-button mr-3"
                href="https://www.twitter.com/2SureNG/"
              >
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
