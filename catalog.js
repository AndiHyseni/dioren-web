document.addEventListener("DOMContentLoaded", function () {
  // Product data
  const products = [
    // Ullinj Products (24)
    {
      id: 1,
      name: "Bulayhan Susam",
      category: "salca",
      quantity: "25kg",
      image: "products/Asset 20.png",
    },
    {
      id: 2,
      name: "Dioren Salce Pizza",
      category: "salca",
      quantity: "5kg",
      image: "products/Asset 21.png",
    },
    {
      id: 3,
      name: "Merysa Pellati pomodoro",
      category: "salca",
      quantity: "2.5kg",
      image: "products/Asset 22.png",
    },
    {
      id: 4,
      name: "Salcë Pesto Klasike",
      category: "salca",
      quantity: "190gr",
      image: "products/Asset 23.png",
    },
    {
      id: 5,
      name: "Dioren Feferona djegës",
      category: "turshi",
      quantity: "10kg",
      image: "products/Asset 24.png",
    },
    {
      id: 6,
      name: "Dioren Feferona djegës",
      category: "turshi",
      quantity: "5kg",
      image: "products/Asset 25.png",
    },
    {
      id: 7,
      name: "Dioren Kërpudha champignon",
      category: "turshi",
      quantity: "10kg",
      image: "products/Asset 26.png",
    },
    {
      id: 8,
      name: "Dioren Kërpudha champignon",
      category: "turshi",
      quantity: "5kg",
      image: "products/Asset 27.png",
    },
    {
      id: 9,
      name: "Dioren Ulli Kallamata",
      category: "ullinj",
      quantity: "300gr",
      image: "products/dioren paqeta ulli 2.png",
    },
    {
      id: 10,
      name: "Dioren Ulli të gjelbërt",
      category: "ullinj",
      quantity: "300gr",
      image: "products/dioren-kese.png",
    },
    {
      id: 11,
      name: "Dioren Ulli me spec",
      category: "ullinj",
      quantity: "300gr",
      image: "products/dioren paqeta ulli .png",
    },
    {
      id: 12,
      name: "Dioren Ulli të zi me vaj",
      category: "ullinj",
      quantity: "300gr",
      image: "products/dioren paqeta kalamata .png",
    },
    {
      id: 13,
      name: "Dioren Ulli të gjelbërt me spec",
      category: "ullinj",
      quantity: "720ml",
      image: "products/dioren-ulli.png",
    },
    {
      id: 14,
      name: "Dioren Ulli të gjelbërt",
      category: "ullinj",
      quantity: "720ml",
      image: "products/dioren-ulli2.png",
    },
    {
      id: 15,
      name: "Dioren Ulli Kallamata",
      category: "ullinj",
      quantity: "720ml",
      image: "products/dioren-ulli3.png",
    },
    {
      id: 16,
      name: "Dioren Fletë Lakre",
      category: "turshi",
      quantity: "720ml",
      image: "products/dioren-laker.png",
    },
    {
      id: 17,
      name: "Dioren Rrepë e kuqe",
      category: "turshi",
      quantity: "720ml",
      image: "products/Asset 36.png",
    },
    {
      id: 18,
      name: "Dioren Feferona",
      category: "turshi",
      quantity: "720ml",
      image: "products/dioren-feferona-720.png",
    },
    {
      id: 19,
      name: "Dioren Feferona",
      category: "turshi",
      quantity: "370ml",
      image: "products/dioren-feferona-370.png",
    },
    {
      id: 20,
      name: "Aceto uthull e molles",
      category: "vajra-uthull",
      quantity: "500ml",
      image: "products/Asset 39.png",
    },
    {
      id: 21,
      name: "Aceto balsamico di modena",
      category: "vajra-uthull",
      quantity: "500ml",
      image: "products/Asset 40.png",
    },
    {
      id: 22,
      name: "Dioren Aqua balsamico",
      category: "vajra-uthull",
      quantity: "500ml",
      image: "products/Asset 41.png",
    },
    {
      id: 23,
      name: "Aqua Uthull ushqimore 9%",
      category: "vajra-uthull",
      quantity: "1L",
      image: "products/Asset 42.png",
    },
    {
      id: 24,
      name: "Dioren Krem balsamico",
      category: "vajra-uthull",
      quantity: "500ml",
      image: "products/Asset 43.png",
    },

    // Djath Products (10)
    {
      id: 25,
      name: "Dioren Aqua balsamico",
      category: "vajra-uthull",
      quantity: "3L",
      image: "products/Asset 44.png",
    },
    {
      id: 26,
      name: "Yudum Vaj Fritex",
      category: "vajra-uthull",
      quantity: "18L",
      image: "products/Asset 45.png",
    },
    {
      id: 27,
      name: "Zdr Djathë i përzier",
      category: "djath",
      quantity: "-",
      image: "products/Asset 46.png",
    },
    {
      id: 28,
      name: "Kim syrup karamel",
      category: "toppings",
      quantity: "3kg",
      image: "products/Asset 47.png",
    },
    {
      id: 29,
      name: "Kim syrup karamel",
      category: "toppings",
      quantity: "300gr",
      image: "products/Asset 48.png",
    },
    {
      id: 30,
      name: "Kim Chocolate topping",
      category: "toppings",
      quantity: "1kg",
      image: "products/Asset 49.png",
    },
    {
      id: 31,
      name: "Kim Chocolate topping",
      category: "toppings",
      quantity: "300gr",
      image: "products/Asset 50.png",
    },
    {
      id: 32,
      name: "Kim syrup karamel",
      category: "toppings",
      quantity: "850gr",
      image: "products/Asset 51.png",
    },
    {
      id: 33,
      name: "Kim syrup karamel",
      category: "toppings",
      quantity: "500gr",
      image: "products/Asset 52.png",
    },
    {
      id: 34,
      name: "Kim Pellati",
      category: "salca",
      quantity: "700gr",
      image: "products/Asset 53.png",
    },

    // Turshi Products (10)
    {
      id: 35,
      name: "Kim Pellati",
      category: "salca",
      quantity: "2.5kg",
      image: "products/Asset 54.png",
    },
    {
      id: 36,
      name: "Kim Majonez",
      category: "salca",
      quantity: "5kg",
      image: "products/Asset 55.png",
    },
    {
      id: 37,
      name: "Kim Ketchup",
      category: "salca",
      quantity: "5kg",
      image: "products/Asset 56.png",
    },
    {
      id: 38,
      name: "Kim Ketchup",
      category: "salca",
      quantity: "5kg",
      image: "products/Asset 57.png",
    },
    {
      id: 39,
      name: "Kim Majonez",
      category: "salca",
      quantity: "5kg",
      image: "products/Asset 58.png",
    },
    {
      id: 40,
      name: "Kim Majonez",
      category: "salca",
      quantity: "500gr",
      image: "products/Asset 59.png",
    },
    {
      id: 41,
      name: "Kim Majonez",
      category: "salca",
      quantity: "1kg",
      image: "products/Asset 60.png",
    },
    {
      id: 42,
      name: "Kim Majonez light",
      category: "salca",
      quantity: "630gr",
      image: "products/Asset 61.png",
    },
    {
      id: 43,
      name: "Kim Majonez Delikates",
      category: "salca",
      quantity: "630gr",
      image: "products/Asset 62.png",
    },
    {
      id: 44,
      name: "Kim Ketchup",
      category: "salca",
      quantity: "12gr",
      image: "products/Asset 63.png",
    },

    // Vajra & Uthull Products (6)
    {
      id: 45,
      name: "Kim Majonez",
      category: "salca",
      quantity: "12gr",
      image: "products/Asset 64.png",
    },
    {
      id: 46,
      name: "Kim Ketchup ëmbël",
      category: "salca",
      quantity: "500gr",
      image: "products/Asset 65.png",
    },
    {
      id: 47,
      name: "Vaj Kim Ketchup Pizza",
      category: "salca",
      quantity: "500gr",
      image: "products/Asset 66.png",
    },
    {
      id: 48,
      name: "Kim Ketchup djegs",
      category: "salca",
      quantity: "500gr",
      image: "products/Asset 67.png",
    },
    {
      id: 49,
      name: "Kim Ketchup Pizza",
      category: "salca",
      quantity: "500gr",
      image: "products/Asset 68.png",
    },
    {
      id: 50,
      name: "Kim Ketchup ëmbël",
      category: "salca",
      quantity: "1kg",
      image: "products/Asset 69.png",
    },

    // Salca Products (18)
    {
      id: 51,
      name: "Kim Ketchup djegs",
      category: "salca",
      quantity: "1kg",
      image: "products/Asset 70.png",
    },
    {
      id: 52,
      name: "Pr. Këpurdha",
      category: "turshi",
      quantity: "720ml",
      image: "products/Asset 71.png",
    },
    {
      id: 53,
      name: "Pr. Panxhar",
      category: "turshi",
      quantity: "720ml",
      image: "products/panxhar-dioren.png",
    },
    {
      id: 54,
      name: "Princ Feferon",
      category: "turshi",
      quantity: "720ml",
      image: "products/Asset 73.png",
    },
    {
      id: 55,
      name: "Dioren Tranguj",
      category: "turshi",
      quantity: "2500ml",
      image: "products/dioren-kastravec-big.png",
    },
    {
      id: 56,
      name: "Dioren Tranguj",
      category: "turshi",
      quantity: "720ml",
      image: "products/dioren-kastravec.png",
    },
    {
      id: 57,
      name: "Pr.Tranguj II-klas",
      category: "turshi",
      quantity: "720ml",
      image: "products/Asset 76.png",
    },
    {
      id: 58,
      name: "Pr.Tranguj extra klas",
      category: "turshi",
      quantity: "720ml",
      image: "products/Asset 77.png",
    },
    {
      id: 59,
      name: "Princ Fletë Lakre",
      category: "turshi",
      quantity: "1700ml",
      image: "products/Asset 78.png",
    },
    {
      id: 60,
      name: "Princ Fletë Lakre",
      category: "turshi",
      quantity: "720ml",
      image: "products/Asset 79.png",
    },
    {
      id: 61,
      name: "Princ Feferon",
      category: "turshi",
      quantity: "5kg",
      image: "products/Asset 80.png",
    },
    {
      id: 62,
      name: "Dioren Laker Vakum",
      category: "turshi",
      quantity: "8kg",
      image: "products/Asset 81.png",
    },
    {
      id: 63,
      name: "Dioren Spec me gjizë",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 82.png",
    },
    {
      id: 64,
      name: "Dioren Spec i kuq",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 83.png",
    },
    {
      id: 65,
      name: "Dioren Somborka me lakër",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 84.png",
    },
    {
      id: 66,
      name: "Dioren Somborka",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 85.png",
    },
    {
      id: 67,
      name: "Dioren Sallatë",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 86.png",
    },
    {
      id: 68,
      name: "Dioren Lakër Rasoj",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 87.png",
    },

    // Toppings Products (6)
    {
      id: 69,
      name: "Dioren Domate",
      category: "turshi",
      quantity: "1.2kg",
      image: "products/Asset 88.png",
    },
    {
      id: 70,
      name: "Djathë i shtypur vakum",
      category: "djath",
      quantity: "-",
      image: "products/Asset 89.png",
    },
    {
      id: 71,
      name: "Zdr Parmezan",
      category: "djath",
      quantity: "-",
      image: "products/Asset 90.png",
    },
    {
      id: 72,
      name: "Zdr Djath i përzier",
      category: "djath",
      quantity: "800gr",
      image: "products/Asset 91.png",
    },
    {
      id: 73,
      name: "Ekosharr djathë i lopës vakum",
      category: "djath",
      quantity: "-",
      image: "products/Asset 92.png",
    },
    {
      id: 74,
      name: "Ekosharr djathë i fortë vakum",
      category: "djath",
      quantity: "-",
      image: "products/Asset 93.png",
    },
    {
      id: 75,
      name: "Ekosharr djathë i fortë sharri",
      category: "djath",
      quantity: "8kg",
      image: "products/Asset 94.png",
    },
    {
      id: 76,
      name: "Ekosharr djathë i lopës",
      category: "djath",
      quantity: "8kg",
      image: "products/Asset 95.png",
    },
    {
      id: 77,
      name: "Ekosharr djathë i lopës",
      category: "djath",
      quantity: "800gr",
      image: "products/Asset 96.png",
    },
    {
      id: 78,
      name: "Pr.Ulli me spec",
      category: "ullinj",
      quantity: "720ml",
      image: "products/Asset 97.png",
    },
    {
      id: 79,
      name: "Pr.Ulli me badem",
      category: "ullinj",
      quantity: "720ml",
      image: "products/Asset 98.png",
    },
    {
      id: 80,
      name: "Pr.Ulli kallamata",
      category: "ullinj",
      quantity: "720ml",
      image: "products/Asset 99.png",
    },
    {
      id: 81,
      name: "Pr.Ulli kallamata",
      category: "ullinj",
      quantity: "720ml",
      image: "products/Asset 100.png",
    },
    {
      id: 82,
      name: "Pr.Ulli gjelbërt",
      category: "ullinj",
      quantity: "720ml",
      image: "products/Asset 101.png",
    },
    {
      id: 83,
      name: "Pr.Ulli gjelbërt pa berthamë",
      category: "ullinj",
      quantity: "720ml",
      image: "products/Asset 102.png",
    },
    {
      id: 84,
      name: "Ulli të gjelbërt Mamuth",
      category: "ullinj",
      quantity: "13kg",
      image: "products/Asset 103.png",
    },
    {
      id: 85,
      name: "Ulli të gjelbërt Fine",
      category: "ullinj",
      quantity: "13kg",
      image: "products/fine.png",
    },
    {
      id: 86,
      name: "Ulli të gjelbërt pa bërthamë",
      category: "ullinj",
      quantity: "10kg",
      image: "products/Asset 105.png",
    },
    {
      id: 87,
      name: "Ulli Kalamata Fine",
      category: "ullinj",
      quantity: "13kg",
      image: "products/Asset 106.png",
    },
    {
      id: 88,
      name: "Ulli Kalamata Superior",
      category: "ullinj",
      quantity: "13kg",
      image: "products/Asset 107.png",
    },
    {
      id: 89,
      name: "Ulli Kalamata Jumbo",
      category: "ullinj",
      quantity: "13kg",
      image: "products/Asset 108.png",
    },
    {
      id: 90,
      name: "Ulli Kalamata Colossal",
      category: "ullinj",
      quantity: "13kg",
      image: "products/Asset 109.png",
    },
    {
      id: 91,
      name: "Ulli të zi Natyral",
      category: "ullinj",
      quantity: "13kg",
      image: "products/Asset 110.png",
    },
    {
      id: 92,
      name: "Ulli të gjelbërt me spec",
      category: "ullinj",
      quantity: "10kg",
      image: "products/Asset 111.png",
    },
    {
      id: 93,
      name: "Ulli të zi oksid",
      category: "ullinj",
      quantity: "2.5kg",
      image: "products/Asset 112.png",
    },
    {
      id: 94,
      name: "Ulli të zi të prerë",
      category: "ullinj",
      quantity: "2kg",
      image: "products/Asset 113.png",
    },
    {
      id: 95,
      name: "Ulli të zi oksid",
      category: "ullinj",
      quantity: "2.5kg",
      image: "products/Asset 114.png",
    },
    {
      id: 96,
      name: "Berak Tranguj",
      category: "turshi",
      quantity: "15kg",
      image: "products/Asset 115.png",
    },
    {
      id: 97,
      name: "Miell Casillo Caputo",
      category: "miell",
      quantity: "1kg",
      image: "products/molino-casillo-la-pasta.png",
    },
    {
      id: 98,
      name: "Maj Lievito Caputo",
      category: "miell",
      quantity: "100gr",
      image: "products/lievi100-1.png",
    },
    {
      id: 99,
      name: "Miell pa gluten Fioreglut Caputo",
      category: "miell",
      quantity: "1kg",
      image: "products/fioreglut-pizza-illu.png",
    },
    {
      id: 100,
      name: "Miell për Pizza Nuvola Super Caputo",
      category: "miell",
      quantity: "25kg",
      image: "products/25-nuvola-super-illu.png",
    },
    {
      id: 101,
      name: "Miell Saccorosso Caputo",
      category: "miell",
      quantity: "25kg",
      image: "products/25-saccorosso-illu.png",
    },
    {
      id: 102,
      name: "Miell për Pizza Caputo",
      category: "miell",
      quantity: "25kg",
      image: "products/25-pizzeria-illu.png",
    },
    {
      id: 103,
      name: "Miell për Pizza Caputo",
      category: "miell",
      quantity: "25kg",
      image: "products/25-pizzeria-illu.png",
    },
    {
      id: 104,
      name: "Dioren Ulli të gjelbërt me spec",
      category: "ullinj",
      quantity: "370ml",
      image: "products/dioren-ulli-small.png",
    },
    {
      id: 105,
      name: "Dioren Ulli të gjelbërt",
      category: "ullinj",
      quantity: "370ml",
      image: "products/dioren-ulli2-small.png",
    },
    {
      id: 106,
      name: "Dioren Ulli Kallamata",
      category: "ullinj",
      quantity: "370ml",
      image: "products/dioren-ulli3-small.png",
    },
    {
      id: 107,
      name: "Ajvar i djegëst Dioren",
      category: "salca",
      quantity: "720ml",
      image: "products/dioren-ajvar-djegst.png",
    },
    {
      id: 108,
      name: "Ajvar i ëmbël Dioren",
      category: "salca",
      quantity: "720ml",
      image: "products/dioren-ajvar-embel.png",
    },
  ];
  // DOM Elements
  const productsGrid = document.getElementById("productsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const productModal = document.getElementById("productModal");
  const closeModal = document.querySelector(".close-modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalCode = document.getElementById("modalCode");
  const modalQuantity = document.getElementById("modalQuantity");
  const modalDescription = document.getElementById("modalDescription");

  // Current filter
  let currentFilter = "all";
  let searchQuery = "";

  // Initialize the page
  function init() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get("filter");

    if (
      filterParam &&
      [
        "ullinj",
        "djath",
        "turshi",
        "vajra-uthull",
        "salca",
        "toppings",
        "miell",
      ].includes(filterParam)
    ) {
      currentFilter = filterParam;

      // Update active filter button
      filterButtons.forEach((btn) => {
        if (btn.dataset.filter === currentFilter) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    renderProducts();
    setupEventListeners();
  }

  // Render products based on current filter and search
  function renderProducts() {
    // Clear products grid
    productsGrid.innerHTML = "";

    // Filter products
    let filteredProducts = products;

    if (currentFilter !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === currentFilter
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          (product.code && product.code.toLowerCase().includes(query)) ||
          (product.description &&
            product.description.toLowerCase().includes(query))
      );
    }

    // Display no results message if no products match
    if (filteredProducts.length === 0) {
      productsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Nuk u gjetën produkte</h3>
                    <p>Ju lutemi provoni një filtër ose kërkim tjetër</p>
                </div>
            `;
      return;
    }

    // Render filtered products
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.dataset.id = product.id;

      // Get category name in Albanian
      let categoryName = "";
      switch (product.category) {
        case "ullinj":
          categoryName = "Ullinj";
          break;
        case "djath":
          categoryName = "Djathë";
          break;
        case "turshi":
          categoryName = "Turshi";
          break;
        case "vajra-uthull":
          categoryName = "Vajra & Uthull";
          break;
        case "salca":
          categoryName = "Salca";
          break;
        case "toppings":
          categoryName = "Toppings";
          break;
        case "miell":
          categoryName = "Miell";
          break;
      }

      productCard.innerHTML = `
                <div class="product-image">
                    <span class="product-category">${categoryName}</span>
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-quantity">Sasia: ${product.quantity}</p>
                </div>
            `;

      productsGrid.appendChild(productCard);
    });
  }

  // Setup event listeners
  function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        // Update current filter
        currentFilter = this.dataset.filter;

        // Update URL without reloading the page
        const url = new URL(window.location);
        if (currentFilter === "all") {
          url.searchParams.delete("filter");
        } else {
          url.searchParams.set("filter", currentFilter);
        }
        window.history.pushState({}, "", url);

        // Render products with new filter
        renderProducts();
      });
    });

    // Search functionality
    searchBtn.addEventListener("click", function () {
      searchQuery = searchInput.value.trim().toLowerCase();
      renderProducts();
    });

    searchInput.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        searchQuery = searchInput.value.trim().toLowerCase();
        renderProducts();
      }
    });

    // Product card click (event delegation)
    productsGrid.addEventListener("click", function (e) {
      // Check if clicked element is a product card or a child of a product card
      const productCard = e.target.closest(".product-card");
      if (!productCard) return;

      // If clicked on view details button or product card
      if (
        e.target.classList.contains("view-details") ||
        e.target.closest(".product-card")
      ) {
        const productId = parseInt(productCard.dataset.id);
        const product = products.find((p) => p.id === productId);

        if (product) {
          openProductModal(product);
        }
      }
    });

    // Close modal
    closeModal.addEventListener("click", function () {
      productModal.classList.remove("show");
      setTimeout(() => {
        productModal.style.display = "none";
      }, 300);
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (e) {
      if (e.target === productModal) {
        productModal.classList.remove("show");
        setTimeout(() => {
          productModal.style.display = "none";
        }, 300);
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && productModal.classList.contains("show")) {
        productModal.classList.remove("show");
        setTimeout(() => {
          productModal.style.display = "none";
        }, 300);
      }
    });
  }

  // Open product modal
  function openProductModal(product) {
    // Get category name in Albanian
    let categoryName = "";
    switch (product.category) {
      case "ullinj":
        categoryName = "Ullinj";
        break;
      case "djath":
        categoryName = "Djathë";
        break;
      case "turshi":
        categoryName = "Turshi";
        break;
      case "vajra-uthull":
        categoryName = "Vajra & Uthull";
        break;
      case "salca":
        categoryName = "Salca";
        break;
      case "toppings":
        categoryName = "Toppings";
        break;
    }

    // Set modal content
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalCategory.textContent = categoryName;
    modalCode.textContent = `Kodi: ${product.code}`;
    modalQuantity.textContent = `Sasia: ${product.quantity}`;
    modalDescription.textContent = product.description;

    // Show modal
    productModal.style.display = "block";
    setTimeout(() => {
      productModal.classList.add("show");
    }, 10);
  }

  // Initialize the page
  init();
});
