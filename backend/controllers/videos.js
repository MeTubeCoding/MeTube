import express from "express";
import mongoose from "mongoose";

import VideoModel from "../models/Video.model.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await VideoModel.find();

    res.json({
      data: videos,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createVideos = async (req, res) => {
  const video = req.body;

  const newVideo = new VideoModel({ ...video });

  try {
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
export const searchVideos = async (req, res) => {
  try {
    const videos = await VideoModel.find();
    const requestString = req.body.data;
    const regexString = requestString.replace(/ /g, "|").split("").join(".*");
    const regex = new RegExp(regexString, "i");
    const requestedVideos = videos.filter(
      (video) =>
        regex.test(video.title) ||
        regex.test(video.channel) ||
        video.tags.some((tag) => regex.test(tag))
    );

    res.json(requestedVideos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
