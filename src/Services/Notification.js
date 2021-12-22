import API from '../Axios/API';

const data = {
  included_segments: ["Active Users"],
  app_id: "fabd29de-c34b-4d54-b7a4-64d56d43c1f8",
  headings: {
    pt: "Nova Campanha",
  },
  contents: {
    en: "test",
    pt: "Campanha na sua cidade",
  },
  data: { custom_data: "Some_Data" },
  web_url: "https://projeto-es.vercel.app",
  app_url: "https://projeto-es.vercel.app",
};
const fetchNotifications = async () => {
  await API.post('/notifications', data)
};

export default fetchNotifications;