<template>
    <div class="about">
        <h1>About BINI</h1>
        <p>BINI is a talented girl group that has made waves in the P-Pop industry with their vibrant music and powerful performances.</p>
        
        <h2>BINI Members</h2>
        <ul class="member-list">
            <li v-for="(member, index) in members" :key="index">
                <h3>{{ member.name }}</h3>
                <img :src="member.image" :alt="member.name" class="member-image" />
            </li>
        </ul>

        <h2>BINI's Journey</h2>
        <p>BINI debuted in 2021 and quickly captured the hearts of fans with their unique sound and energetic performances. Since then, they have released multiple hits and have grown their fanbase globally.</p>

        <h2>Their Mission</h2>
        <p>To inspire and uplift through music, showcasing the beauty of Filipino culture and talent.</p>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            members: [
                {
                    name: 'Jhoanna Christine Robles',
                    image: require('@/assets/jho.jpg'), 
                },
                {
                    name: 'Maraiah Queen Arceta.',
                    image: require('@/assets/aiah.jpg'),
                },
                {
                    name: 'Ma. Nicolette Vergara',
                    image: require('@/assets/colet.jpg'),
                },
                {
                    name: 'Sheena Mae Catacutan',
                    image: require('@/assets/sheena.jpg'), 
                },
                {
                    name: 'Mary Loi Yves Ricalde',
                    image: require('@/assets/maloi.jpg'),
                },
                {
                    name: 'Stacey Aubrey Sevilleja',
                    image: require('@/assets/stacey.jpg'),
                },
                {
                    name: 'Mikhaela Janna Lim',
                    image: require('@/assets/mikha.jpg'),
                },
                {
                    name: 'Gweneth L. Apuli',
                    image: require('@/assets/gwen.jpg'),
                },
                
            ],
        };
    },
}
</script>

<style scoped>
.about {
    text-align: center;
    padding: 20px;
}

.member-list {
    list-style-type: none;
    padding: 0;
}

.member-list li {
    margin: 20px 0;
}

.member-image {
    width: 200px; 
    height: auto;
    border-radius: 50%;
}

h3 {
    font-size: .6cm;
}

h2, h1 {
    color: aliceblue;
}
</style>
