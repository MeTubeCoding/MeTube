import express from "express";
import mongoose from "mongoose";

import ShortModel from "../models/Short.model.js";

export const getShorts = async (req, res) => {
  try {
    const shorts = await ShortModel.find();

    res.json({
      data: shorts,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createShorts = async (req, res) => {
  const short = req.body;

  const newShort = new ShortModel({ ...short });

  try {
    await newShort.save();
    res.status(201).json(newShort);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
export const searchShorts = async (req, res) => {
  try {
    const shorts = await ShortModel.find();
    console.log(shorts)
    res.json(shorts)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
