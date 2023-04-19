import express from 'express'
import mongoose from 'mongoose'

import VideoModel from '../models/Video.model'

export const getVideos = async (req, res) => {
  try {
    const videos = await VideoModel.find()

    res.json({
      data: videos
    })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
