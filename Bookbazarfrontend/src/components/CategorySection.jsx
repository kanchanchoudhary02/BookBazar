import React from "react";
import Category from "../data/Category";
import "./CategorySection.css";

function CategorySection() {
  return (
    <section className="category-section">

      <div className="section-header">
        <h2>Shop by Category</h2>
      </div>

      <div className="category-container">

        {Category.map((category) => (
          <div className="category-card" key={category.id}>

            <div className="category-icon">
              {category.icon}
            </div>

            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>

              <span>{category.items}</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default CategorySection;