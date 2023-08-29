import './App.css'
import $ from 'jquery'
import React,{ useEffect, useState } from 'react';

const Question = (props) => {

  let visible = false
  $(() => {
    $("#"+props.ansid).hide(0)
  })

  const toggle = () => {
    if(visible)
      {
        $("#"+props.ansid).hide(300)
        visible = false
        return
      }
      if(!visible)
      {
        $("#"+props.ansid).show(300)
        visible = true
      }
  }

  return (
    <div className="question-container">
      <a className='question-title' onClick={() => toggle()}>▶ {props.title}</a>
      <div id={props.ansid}>
        <p className='question-answer'>{props.text}</p>
        <iframe className={props.vidsrc === "none" ? "hide" : "" } src={props.vidsrc} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        <img className={props.imgsrc === "none" ? "hide" : "" } src={props.imgsrc} />
      </div>
    </div>
  )

}

export default Question