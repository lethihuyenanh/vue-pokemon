import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue';
import BaseSection from './components/UI/BaseSection.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSnipper from './components/UI/BaseSnipper.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseSearch from './components/UI/BaseSearch.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-section', BaseSection);
app.component('base-badge', BaseBadge);
app.component('base-snipper', BaseSnipper);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-search', BaseSearch);

app.mount('#app')
