import express from "express";
import mongoose from "mongoose";

import ChannelModel from "../models/Channel.model.js";

export const getChannels = async (req, res) => {
  try {
    const channels = await ChannelModel.find();

    res.json({
      data: channels,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createChannels = async (req, res) => {
  const channel = req.body;

  const newChannel = new ChannelModel({ ...channel });

  try {
    await newChannel.save();
    res.status(201).json(newChannel);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
export const searchChannels = async (req, res) => {
  try {
    const channels = await ChannelModel.find();
    const requestString = req.body.data;
    const regexString = requestString.replace(/ /g, "|").split("").join(".*");
    const regex = new RegExp(regexString, "i");
    const requestedChannels = channels.filter(
      (channel) =>
        regex.test(channel.title) ||
        regex.test(channel.channel) ||
        channel.tags.some((tag) => regex.test(tag))
    );

    if (requestedChannels.length > 0) {
      res.json(requestedChannels);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
