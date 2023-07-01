require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/users');
const newsRoutes = require('./routes/news');
const programRoutes = require('./routes/program');
const contentRoutes = require('./routes/content');
const carouselRoutes = require('./routes/carousel');

const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();
app.use(cors());

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'))

app.use('/users', usersRoutes);
app.post('/upload',upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})

// Carousel
app.use('/carousel', carouselRoutes);

// Content
app.use('/content', contentRoutes)

// News
app.use('/news', newsRoutes);

// Program
app.use('/program', programRoutes);

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})