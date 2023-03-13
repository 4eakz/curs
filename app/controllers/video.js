const Video = require('../models/video');

// Контроллер для получения всех видео
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

// Контроллер для получения одного видео по id
const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ success: false, message: 'Видео не найдено' });
    }
    res.status(200).json({ success: true, data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

// Контроллер для создания нового видео
const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json({ success: true, data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

// Контроллер для обновления видео по id
const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!video) {
      return res.status(404).json({ success: false, message: 'Видео не найдено' });
    }
    res.status(200).json({ success: true, data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

// Контроллер для удаления видео по id
const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ success: false, message: 'Видео не найдено' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

module.exports = {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo,
};
