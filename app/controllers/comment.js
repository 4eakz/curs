const Comment = require('../models/comment');

// Создание комментария
exports.createComment = async (req, res, next) => {
  try {
    const { videoId, text } = req.body;
    const comment = await Comment.create({
      user: req.user.id,
      video: videoId,
      text,
    });
    res.status(201).json({ success: true, data: comment });
  } catch (err) {
    next(err);
  }
};

// Получение комментариев для видео
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ video: req.params.videoId }).populate('user');
    res.status(200).json({ success: true, data: comments });
  } catch (err) {
    next(err);
  }
};

// Обновление комментария
exports.updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }
    if (comment.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, error: 'You are not authorized to update this comment' });
    }
    comment.text = req.body.text;
    await comment.save();
    res.status(200).json({ success: true, data: comment });
  } catch (err) {
    next(err);
  }
};

// Удаление комментария
exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }
    if (comment.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, error: 'You are not authorized to delete this comment' });
    }
    await comment.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
