import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState:{ 
    products:[
    {
      id: 1,
      title: "PhotoEdit Pro",
      category: "Design",
      description:
        "A professional photo editing software with AI enhancement tools.",
      platform: ["Windows", "Mac"],
      features: ["AI Auto Enhance", "Layer Support", "Batch Editing"],
      image: "bg-blue-400",
      rating: 4.5,
      price: 60,
    },
    {
      id: 2,
      title: "CodeMaster IDE",
      category: "Development",
      description:
        "A powerful IDE for JavaScript, Python, and more with real-time debugging.",
      platform: ["Windows", "Mac", "Linux"],
      features: ["Syntax Highlighting", "Git Integration", "Live Server"],
      image: "bg-red-400",
      rating: 4.8,
      price: 80,
    },
    {
      id: 3,
      title: "TaskManager",
      category: "Productivity",
      description:
        "A task management tool to boost team collaboration and efficiency.",
      platform: ["Web", "Mobile"],
      features: ["Task Tracking", "Time Management", "Collaboration Tools"],
      image: "bg-teal-400",
      rating: 4.2,
      price: 20,
    },
    {
      id: 4,
      title: "StockViewer",
      category: "Finance",
      description:
        "Track stock market trends and get real-time alerts on investments.",
      platform: ["Mobile", "Web"],
      features: [
        "Live Stock Updates",
        "Portfolio Management",
        "AI Predictions",
      ],
      image: "bg-yellow-400",
      rating: 4.7,
      price: 50,
    },
    {
      id: 5,
      title: "GameX Engine",
      category: "Gaming",
      description:
        "A game development engine with real-time rendering and AI features.",
      platform: ["Windows", "Mac"],
      features: ["3D Rendering", "Physics Engine", "VR Support"],
      image: "bg-indigo-400",
      rating: 4.9,
      price: 120,
    },
    {
      id: 6,
      title: "HealthTrack",
      category: "Healthcare",
      description:
        "Monitor your health metrics and track fitness goals effortlessly.",
      platform: ["Mobile"],
      features: ["Heart Rate Monitoring", "Step Counter", "Calorie Tracker"],
      image: "bg-pink-400",
      rating: 4.6,
      price: 30,
    },
  ],
  setSelectedOrderBy:{id: 0,name:"Order By:"},
 },
  reducers: {
    setProductData: (state, action) => {
      state.products = action.payload;
      console.log(action.payload, "redux payload");
    },
    setSelectedOrderBy: (state, action) =>{
      state.setSelectedOrderBy = action.payload;
    }
  },
});

export const { setProductData, setSelectedOrderBy} = productSlice.actions;
export default productSlice.reducer;
