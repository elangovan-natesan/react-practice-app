import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function Shop() {
  const location = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log(response.data); // ✅ logs the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    // Call the function
    fetchPosts();
  }, []);

  // 👇 Parse query params from the URL
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title {id}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
