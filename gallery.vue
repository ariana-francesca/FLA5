<template>
    <div class="gallery">
        <h1>Gallery</h1>
        <div class="image-grid">
            <div class="image-item" v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" class="gallery-image" />
                <p>{{ image.caption }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
        return {
            images: [
                {
                    src: require('@/assets/gal1.jpg'), 
                    alt: 'BINI Performance 1',
                    caption: 'BINI at the annual concert.',
                },
                {
                    src: require('@/assets/gal2.jpg'),
                    alt: 'BINI Performance 2',
                    caption: 'A stunning performance in Manila.',
                },
                {
                    src: require('@/assets/gal3.jpg'),
                    alt: 'BINI with Fans',
                    caption: 'Meeting fans.',
                },
                // Add more images as needed
            ],
        };
    },
}
</script>

<style>
.images {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.images img {
  width: 300px;
  height: auto;
}

p, h1 {
  color: #000;
}

p {
  font-size: .5cm;
  padding-top: 5px;
}
</style>
