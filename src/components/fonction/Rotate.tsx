/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Video from 'Video.tsx'
import 'video.js/dist/video-js.css'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
const ffmpeg = createFFmpeg({ log: true })

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const loadFFmpeg = async () => {
  await ffmpeg.load()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
const handleTrim = async (start: any, end: any) => {
  loadFFmpeg()
  ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(setVideoFile))
  await ffmpeg.run(
    '-i',
    'input.mp4',
    '-ss',
    start,
    '-to',
    end,
    '-c',
    'copy',
    'output.mp4'
  )
  const data = ffmpeg.FS('readFile', 'output.mp4')
  const trimmedVideoUrl = URL.createObjectURL(
    new Blob([data.buffer], { type: 'video/mp4' })
  )
  setVideoFile(trimmedVideoUrl)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
const handleRotate = async (angle: number) => {
  // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-confusing-void-expression
  await loadFFmpeg()
  ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(setVideoFile))
  await ffmpeg.run(
    '-i',
    'input.mp4',
    '-vf',
    `rotate=${(angle * Math.PI) / 180}:ow=rotw(iw):oh=roth(ih)`,
    'output.mp4'
  )
  const data = ffmpeg.FS('readFile', 'output.mp4')
  const rotatedVideoUrl = URL.createObjectURL(
    new Blob([data.buffer], { type: 'video/mp4' })
  )
  setVideoFile(rotatedVideoUrl)
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createFFmpeg (_arg0: { log: boolean }) {
  throw new Error('Function not implemented.')
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setVideoFile (_trimmedVideoUrl: string) {
  throw new Error('Function not implemented.')
}
function fetchFile (_setVideoFile: (_trimmedVideoUrl: string) => void): any {
  throw new Error('Function not implemented.')
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-redeclare
function loadFFmpeg () {
  throw new Error('Function not implemented.')
}
