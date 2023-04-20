import express from "express";
import mongoose from "mongoose";

import ChannelModel from "../models/Channel.model.js";

export const createChannels = async (req, res) => {
    const Channel = req.body;
  
    const newChannel = new ChannelModel({ ...Channel });
  
    try {
      await newChannel.save();
      res.status(201).json(newChannel);
    } catch (error) {
      res.status(409).json(error.message);
    }
  };