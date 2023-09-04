import './App.css'
import $ from 'jquery'
import React,{ useEffect, useState } from 'react';

const Question = (props) => {

  let visible = false

  $(() => {
    $("#"+props.ansid).hide(0)
  })

  const toggle = () => {
    if(!visible)
      {
        $("#"+props.ansid).show(500)
        $("#arrow"+props.ansid).addClass("rotate")
        visible = true
        return
      }
      if(visible)
      {
        $("#"+props.ansid).hide(500)
        $("#arrow"+props.ansid).removeClass("rotate")
        visible = false
      }
  }

  return (
    <div className="question-container">
      <a className='question-title' onClick={() => toggle()}><div id={"arrow"+props.ansid} className=''>&nbsp;&nbsp;▶&nbsp;&nbsp;</div>{props.title}</a>
      <div id={props.ansid}>
        <p className='question-answer'>{props.text}</p>
        <video className={props.vidsrc === "none" ? "hide" : "" } preload="auto" controls={true} src="https://heller-bucker.s3.eu-west-3.amazonaws.com/ITV-SMVB%26MGP_1.mp4" />
        <img className={props.imgsrc === "none" ? "hide" : "question-img" } src={props.imgsrc} />
      </div>
    </div>
  )

}

export default Question