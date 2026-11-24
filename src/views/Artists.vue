<template>
  <div>
    <!-- Page Header -->
    <section class="hero-section spotlight text-primary-foreground py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured Artists
          </h1>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Discover talented independent artists and their amazing works
          </p>
        </div>
      </div>
    </section>

    <!-- Artist Showcase -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="artist in featuredArtists" :key="artist.id" class="card">
            <div class="p-6">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span class="text-primary-foreground font-display font-bold text-lg">{{ artist.name.charAt(0) }}</span>
                </div>
                <div>
                  <h3 class="font-display text-xl font-semibold">{{ artist.name }}</h3>
                  <p class="text-muted-foreground">{{ artist.specialty }}</p>
                </div>
              </div>
              <p class="text-muted-foreground mb-4">{{ artist.bio }}</p>
              <div class="mb-4">
                <div class="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{{ artist.artworks }} artworks</span>
                  <span>{{ artist.followers }} followers</span>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="btn-primary flex-1">View Artworks</button>
                <button class="btn-secondary px-4">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Become an Artist -->
    <section class="section-padding bg-primary text-primary-foreground">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-6">
          Join Our Artist Community
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Showcase your creative talent and connect with collectors worldwide
        </p>
        <button class="btn-secondary bg-card text-primary hover:opacity-90 text-lg px-8 py-4">
          Apply to Become an Artist
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Artists',
  setup() {
    const featuredArtists = ref([
      {
        id: 1,
        name: 'Sarah Chen',
        specialty: 'Dragons & Mythical Creatures',
        bio: 'Specializes in Eastern dragon themes, blending traditional and modern elements',
        artworks: 28,
        followers: 1250
      },
      {
        id: 2,
        name: 'Michael Zhang',
        specialty: 'Fantasy Landscapes',
        bio: 'Excels at depicting dreamlike magical worlds, each piece full of imagination',
        artworks: 35,
        followers: 980
      },
      {
        id: 3,
        name: 'Emma Wang',
        specialty: 'Heroic Characters',
        bio: 'Focuses on portraying epic hero characters, works filled with power and emotion',
        artworks: 22,
        followers: 1450
      }
    ])

    return {
      featuredArtists
    }
  }
}
</script> 