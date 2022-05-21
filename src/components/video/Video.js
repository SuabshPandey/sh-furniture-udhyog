import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid video_section p-0">
      <div className="video_section_div">
        <div className="home_video">
          <ReactPlayer
            width="100%"
            height="500px"
            className="home_video_url"
            playing={true}
            muted={true}
            loop={true}
            url="videos/bgvideo.mkv"
          />
        </div>
        <div className="video_btn_title_div">
          <div className="video_title">
            <p className="video_para">Welcome To</p>
            <h1 className="video_heading">S.H Furniture Udhyog</h1>
          </div>
          <div className="video_play_btn">
            <span onClick={handleShow} className="play_btn">
              <i class="fas fa-play-circle"></i>
            </span>

            <Modal dialogClassName="my-modal modal-lg" show={show} onHide={handleClose}>
              <Modal.Header  closeButton>
              </Modal.Header>
              <Modal.Body className="">
                <ReactPlayer controls  muted={false} url="videos/bgvideo.mkv" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
