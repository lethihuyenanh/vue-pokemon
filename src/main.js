import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSnipper from './components/UI/BaseSnipper.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-snipper', BaseSnipper);
app.component('base-button', BaseButton);

app.mount('#app')
