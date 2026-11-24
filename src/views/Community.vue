<template>
  <div>
    <!-- Page Header -->
    <section class="hero-section spotlight text-primary-foreground py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">
            Art Community
          </h1>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Connecting artists and collectors, sharing creative inspiration and collecting insights
          </p>
        </div>
      </div>
    </section>

    <!-- Community Features -->
    <section class="section-padding bg-card">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z"></path>
              </svg>
            </div>
            <h3 class="font-display text-lg font-semibold mb-2">Discussion Forums</h3>
            <p class="text-muted-foreground text-sm">Art creation and collecting discussions</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="font-display text-lg font-semibold mb-2">Art Contests</h3>
            <p class="text-muted-foreground text-sm">Monthly themed creation competitions</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-display text-lg font-semibold mb-2">Artwork Showcase</h3>
            <p class="text-muted-foreground text-sm">Member personal collection displays</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="font-display text-lg font-semibold mb-2">Learning Resources</h3>
            <p class="text-muted-foreground text-sm">Art tutorials and technique sharing</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Discussions -->
    <section class="section-padding bg-muted">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-display font-bold text-foreground mb-8">Recent Discussions</h2>
        <div class="space-y-4">
          <div v-for="post in recentPosts" :key="post.id" class="card p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                <span class="text-primary-foreground font-bold text-sm">{{ post.author.charAt(0) }}</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center space-x-2 mb-2">
                  <h3 class="font-semibold text-foreground">{{ post.author }}</h3>
                  <span class="text-muted-foreground text-sm">{{ post.time }}</span>
                </div>
                <h4 class="font-display text-lg mb-2">{{ post.title }}</h4>
                <p class="text-muted-foreground mb-3">{{ post.preview }}</p>
                <div class="flex items-center space-x-2 text-sm">
                  <span class="badge badge-muted rounded-full">{{ post.replies }} replies</span>
                  <span class="badge badge-muted rounded-full">{{ post.likes }} likes</span>
                  <span class="badge" aria-label="new activity">New</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Community',
  setup() {
    const recentPosts = ref([
      {
        id: 1,
        author: 'Art Enthusiast',
        time: '2 hours ago',
        title: 'How to evaluate the collectible value of fantasy artworks?',
        preview: 'Recently started collecting fantasy art, wondering what veterans think I should pay attention to...',
        replies: 15,
        likes: 23
      },
      {
        id: 2,
        author: 'Dragon Fan',
        time: '5 hours ago',
        title: 'Sharing my latest dragon-themed artwork collection',
        preview: 'The details in this piece are absolutely amazing, wanted to share with everyone...',
        replies: 8,
        likes: 31
      },
      {
        id: 3,
        author: 'Newbie Artist',
        time: '1 day ago',
        title: 'Discussion on fantasy-style painting techniques',
        preview: 'Just started learning fantasy-style painting, any recommended learning resources?',
        replies: 22,
        likes: 18
      }
    ])

    return {
      recentPosts
    }
  }
}
</script> 