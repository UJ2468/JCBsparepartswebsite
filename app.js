/* =========================================
   1. Scroll Animation Logic (Restored)
   ========================================= */
class ScrollAnimator {
    constructor() {
        this.observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scrolled");
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        const scrollElements = document.querySelectorAll(".scroll-element");
        scrollElements.forEach((el) => observer.observe(el));
    }
}

/* =========================================
   2. Product Catalog Logic
   ========================================= */
class ProductCatalog {
    constructor() {
        // Updated Categories based on your image
        this.categories = [
            { id: "all", name: "All Products", icon: "fas fa-th-large" },
            { id: "breaker-tools", name: "Breaker Tools", icon: "fas fa-hammer" },
            { id: "breakplates", name: "Breakplates", icon: "fas fa-layer-group" },
            { id: "bucket-attachments", name: "Bucket Attachments", icon: "fas fa-link" },
            { id: "bushes", name: "Bushes", icon: "fas fa-circle-notch" },
            { id: "casting-items", name: "Casting Items", icon: "fas fa-industry" },
            { id: "electrical-parts", name: "Electrical Parts", icon: "fas fa-bolt" },
            { id: "fabrication-items", name: "Fabrication Items", icon: "fas fa-tools" },
            { id: "hydraulic-pipes", name: "Hydraulic Pipes", icon: "fas fa-water" },
            { id: "pads", name: "Pads", icon: "fas fa-square-full" },
            { id: "pivot-pins", name: "Pivot Pins", icon: "fas fa-thumbtack" },
            { id: "seal-kits", name: "Seal Kits", icon: "fas fa-ring" },
            { id: "tooth", name: "Tooth Points", icon: "fas fa-tooth" },
            { id: "undercarriage", name: "Undercarriage Parts", icon: "fas fa-truck-monster" }
        ];

        // Updated Products with 'images' array instead of single 'image' string
        this.products = [
            // --- Breaker Tools (Folder: breaker tools) ---
            { 
                id: 101, 
                category: "breaker-tools", 
                title: "HM380 Hydraulic Breaker Chisel", 
                material: "42CrMoA Alloy Steel", 
                application: "Komatsu/JCB Excavator Attachments", 
                images: ["products/breaker tools/hm380.jpg"] 
            },
            { 
                id: 102, 
                category: "breaker-tools", 
                title: "MB1500 Breaker Chisel", 
                material: "High-Grade Forged Steel", 
                application: "Atlas Copco MB1500 Breakers", 
                images: ["products/breaker tools/mb1500.jfif"] 
            },
            { 
                id: 103, 
                category: "breaker-tools", 
                title: "SB43 Breaker Chisel (Soosan Type)", 
                material: "Heat Treated Alloy", 
                application: "General Concrete Breaking", 
                images: [
                    "products/breaker tools/sb43 chisel.jfif",
                    "products/breaker tools/sb43 chisel2.jfif"
                ] 
            },
            { 
                id: 104, 
                category: "breaker-tools", 
                title: "SB81 Breaker Chisel (Soosan Type)", 
                material: "Wear-Resistant 42CrMo Steel", 
                application: "Heavy Duty Rock Demolition", 
                images: [
                    "products/breaker tools/sb81 chisel.jfif",
                    "products/breaker tools/sb81 chisel2.jfif"
                ] 
            },

            // --- Breakplates (Folder: breakplates) ---
            { 
                id: 201, 
                category: "breakplates", 
                title: "Breakplates Counter", 
                material: "Hardox 400", 
                application: "Breaker Housing Assembly", 
                images: ["products/breakplates/breakplates counter.jfif"] 
            },
            { 
                id: 202, 
                category: "breakplates", 
                title: "Friction Plate", 
                material: "Composite Friction Material", 
                application: "Heavy Duty Braking Systems", 
                images: ["products/breakplates/friction.jpg"] 
            },

            // --- Bucket Attachments (Folder: bucketattachment) ---
            { 
                id: 301, 
                category: "bucket-attachments", 
                title: "JCB Quick Coupler", 
                material: "Cast Steel", 
                application: "Fast Attachment Switching", 
                images: [
                    "products/bucketattachment/jcb cupler.jfif",
                    "products/bucketattachment/jcb cupler2.jfif"
                ]
            },
            { 
                id: 302, 
                category: "bucket-attachments", 
                title: "JCB Grapple (Gapler)", 
                material: "High Tensile Steel", 
                application: "Material Handling & Sorting", 
                images: ["products/bucketattachment/jcb gapler.jfif"] 
            },
            { 
                id: 303, 
                category: "bucket-attachments", 
                title: "Pulverizer Attachment", 
                material: "Reinforced Steel", 
                application: "Concrete Crushing & Recycling", 
                images: [
                    "products/bucketattachment/pulverizer attachment.jfif",
                    "products/bucketattachment/pulverizer attachment2.jfif"
                ]
            },

            // --- Bushes (Folder: bush) ---
            { 
                id: 401, 
                category: "bushes", 
                title: "JCB Bush 131", 
                material: "Steel/Bronze", 
                application: "Pivot Joint Assembly", 
                images: ["products/bush/131 bush.webp"] 
            },
            { 
                id: 402, 
                category: "bushes", 
                title: "JCB Bush 750 (250x250)", 
                material: "Hardened Steel", 
                application: "Heavy Duty Pivot", 
                images: ["products/bush/750-jcb-bush-250x250.webp"] 
            },
            { 
                id: 403, 
                category: "bushes", 
                title: "Bronze Bush 364", 
                material: "Bronze Alloy", 
                application: "Low Friction Bearing", 
                images: ["products/bush/bronze-bush-364.webp"] 
            },
            { 
                id: 404, 
                category: "bushes", 
                title: "Bush 927", 
                material: "Steel", 
                application: "Arm Assembly", 
                images: ["products/bush/bush 927.jpg"] 
            },
            { 
                id: 405, 
                category: "bushes", 
                title: "Bush 108-23", 
                material: "Composite", 
                application: "Linkage Systems", 
                images: ["products/bush/bush-108-23.webp"] 
            },
            { 
                id: 406, 
                category: "bushes", 
                title: "Bush 176", 
                material: "Heat Treated Steel", 
                application: "Bucket Pivot", 
                images: ["products/bush/bush-176.webp"] 
            },
             { 
                id: 407, 
                category: "bushes", 
                title: "Bush 982", 
                material: "Standard Steel", 
                application: "General Connection", 
                images: ["products/bush/bush-982.webp"] 
            },
            { 
                id: 408, 
                category: "bushes", 
                title: "Bush 10211", 
                material: "Alloy Steel", 
                application: "Kingpost Assembly", 
                images: ["products/bush/bush-10211.jpeg"] 
            },
            { 
                id: 409, 
                category: "bushes", 
                title: "JCB Bush 129", 
                material: "High Carbon Steel", 
                application: "Stabilizer Leg", 
                images: ["products/bush/jcb-129-bush.jpg"] 
            },
            { 
                id: 410, 
                category: "bushes", 
                title: "JCB Bucket Bush 125", 
                material: "Hardened Alloy", 
                application: "Bucket Linkage", 
                images: ["products/bush/jcb-bucket-bush-125.jpg"] 
            },
            { 
                id: 411, 
                category: "bushes", 
                title: "Steel Bush 983", 
                material: "Stainless Steel", 
                application: "Corrosion Resistant Joint", 
                images: ["products/bush/steel-bush-983.jpeg"] 
            },

            // --- Casting Items (Folder: castingitems) ---
            { 
                id: 501, 
                category: "casting-items", 
                title: "JCB Axle Tube", 
                material: "Heavy Cast Iron", 
                application: "Axle Assembly", 
                images: ["products/castingitems/jcb axle tube.jpeg"] 
            },
            { 
                id: 502, 
                category: "casting-items", 
                title: "JCB Front Hub", 
                material: "Cast Steel", 
                application: "Wheel Hub Assembly", 
                images: [
                    "products/castingitems/jcb front hub.jpeg",
                    "products/castingitems/jcb front hub2.jpg"
                ] 
            },
            { 
                id: 503, 
                category: "casting-items", 
                title: "JCB Rear Hub", 
                material: "Heavy Duty Cast", 
                application: "Rear Wheel Assembly", 
                images: [
                    "products/castingitems/jcb rear hub1.jpeg",
                    "products/castingitems/jcb rear hub2.jpeg"
                ] 
            },
            { 
                id: 504, 
                category: "casting-items", 
                title: "JCB Rear Casing", 
                material: "Cast Iron", 
                application: "Differential Housing", 
                images: ["products/castingitems/jcb-rear-casing.jpg"] 
            },
            { 
                id: 505, 
                category: "casting-items", 
                title: "JCB Tipping Link", 
                material: "Forged Steel", 
                application: "Bucket Tipping Mechanism", 
                images: ["products/castingitems/Tipping-Link-JCB.jpg"] 
            },

            // --- Electrical Parts (Folder: electrical parts) ---
            { 
                id: 601, 
                category: "electrical-parts", 
                title: "JCB Combination Switch", 
                material: "Plastic/Copper", 
                application: "Steering Column Control", 
                images: ["products/electrical parts/jcb Combination switch.jpeg"] 
            },
            { 
                id: 602, 
                category: "electrical-parts", 
                title: "JCB Fuse Box", 
                material: "Plastic", 
                application: "Circuit Protection", 
                images: ["products/electrical parts/jcb Fuse BOX.jpeg"] 
            },
            { 
                id: 603, 
                category: "electrical-parts", 
                title: "JCB Headlight Assembly", 
                material: "Glass/Plastic", 
                application: "Front Illumination", 
                images: ["products/electrical parts/JCB headlight.jpeg"] 
            },
            { 
                id: 604, 
                category: "electrical-parts", 
                title: "JCB Starting Switch", 
                material: "Metal/Plastic", 
                application: "Ignition System", 
                images: ["products/electrical parts/jcb starting switch.jpeg"] 
            },
            { 
                id: 605, 
                category: "electrical-parts", 
                title: "JCB Tail Light", 
                material: "Plastic/LED", 
                application: "Rear Signal", 
                images: ["products/electrical parts/JCB tail light.jpeg"] 
            },
            { 
                id: 606, 
                category: "electrical-parts", 
                title: "JCB Working Light", 
                material: "LED/Halogen", 
                application: "Work Area Lighting", 
                images: ["products/electrical parts/JCB working light.jpeg"] 
            },

            // --- Fabrication Items (Folder: fabiteams) ---
            { 
                id: 701, 
                category: "fabrication-items", 
                title: "JCB Bucket", 
                material: "Fabricated Steel", 
                application: "Excavation/Loading", 
                images: ["products/fabiteams/jcb bucket.jpg"] 
            },
            { 
                id: 702, 
                category: "fabrication-items", 
                title: "JCB Dipper Arm", 
                material: "High Tensile Steel", 
                application: "Excavator Arm Extension", 
                images: ["products/fabiteams/jcb dipper arm.webp"] 
            },
            { 
                id: 703, 
                category: "fabrication-items", 
                title: "JCB Stabilizer Foot", 
                material: "Steel Plate", 
                application: "Machine Stability", 
                images: ["products/fabiteams/JCB Foot.jpeg"] 
            },
            { 
                id: 704, 
                category: "fabrication-items", 
                title: "JCB Inner Slide", 
                material: "Steel", 
                application: "Extension Mechanism", 
                images: ["products/fabiteams/jcb inner.jpeg"] 
            },
            { 
                id: 705, 
                category: "fabrication-items", 
                title: "JCB Loader Plate", 
                material: "Heavy Steel", 
                application: "Loader Bucket Attachment", 
                images: ["products/fabiteams/jcb loader plate.jpeg"] 
            },
            { 
                id: 706, 
                category: "fabrication-items", 
                title: "JCB Outer Slide", 
                material: "Steel", 
                application: "Extension Housing", 
                images: ["products/fabiteams/jcb outer.jpeg"] 
            },
            { 
                id: 707, 
                category: "fabrication-items", 
                title: "JCB Tipping Link Lever", 
                material: "Fabricated Steel", 
                application: "Bucket Control", 
                images: ["products/fabiteams/jcb tiplink lever.jpeg"] 
            },

            // --- Hydraulic Pipes (Folder: hydrolicpipes) ---
            { 
                id: 801, 
                category: "hydraulic-pipes", 
                title: "JCB Pipe 40-301866", 
                material: "Steel/Rubber", 
                application: "Hydraulic Line", 
                images: ["products/hydrolicpipes/40-301866-jcb-pipe.webp"] 
            },
            { 
                id: 802, 
                category: "hydraulic-pipes", 
                title: "Hydraulic Pipe HY332-Y6630", 
                material: "Reinforced Rubber", 
                application: "High Pressure Line", 
                images: ["products/hydrolicpipes/hy332-Y6630.jpg"] 
            },
            { 
                id: 803, 
                category: "hydraulic-pipes", 
                title: "Hydraulic Pipe HY71001", 
                material: "Steel/Flex", 
                application: "Fluid Transfer", 
                images: ["products/hydrolicpipes/hy71001.webp"] 
            },

            // --- Pads (Folder: pads) ---
            { 
                id: 901, 
                category: "pads", 
                title: "JCB Black Stabilizer Pad", 
                material: "Rubber Compound", 
                application: "Surface Protection", 
                images: ["products/pads/jcb black pad.jpeg"] 
            },
            { 
                id: 902, 
                category: "pads", 
                title: "JCB Center Pin Pad", 
                material: "Nylon/Rubber", 
                application: "Pivot Protection", 
                images: ["products/pads/jcb center pin pad.jpg"] 
            },
            { 
                id: 903, 
                category: "pads", 
                title: "JCB Yellow Stabilizer Pad", 
                material: "Polyurethane", 
                application: "Heavy Duty Support", 
                images: ["products/pads/jcb yellow pad.jpeg"] 
            },
            { 
                id: 904, 
                category: "pads", 
                title: "JCB Green Pad", 
                material: "Composite Material", 
                application: "Wear Pad", 
                images: ["products/pads/jcb-green-pad.jpg"] 
            },

             // --- Pivot Pins (Folder: pivit pin) - FIXED PATH ---
            { 
                id: 1001, 
                category: "pivot-pins", 
                title: "Pivot Pin 90198", 
                material: "Induction Hardened Steel", 
                application: "JCB 3DX Bucket", 
                images: ["products/pivit pin/90198.jpg"] 
            },
            { 
                id: 1002, 
                category: "pivot-pins", 
                title: "Center Pivot Pin", 
                material: "High Grade Steel", 
                application: "Center Joint Assembly", 
                images: ["products/pivit pin/centrel pin.jpg"] 
            },
            { 
                id: 1003, 
                category: "pivot-pins", 
                title: "Double Hole Pin", 
                material: "Alloy Steel", 
                application: "Heavy Duty Linkage", 
                images: ["products/pivit pin/doublehallpin.jpg"] 
            },
            { 
                id: 1004, 
                category: "pivot-pins", 
                title: "JCB 1633 Pivot Pin", 
                material: "Hardened Steel", 
                application: "JCB Excavator Pivot", 
                images: ["products/pivit pin/JCB1633-PIVOT-PIN-2.jpg"] 
            },
            { 
                id: 1005, 
                category: "pivot-pins", 
                title: "JCB King Pin (500x500)", 
                material: "Forged Steel", 
                application: "Kingpost Assembly", 
                images: ["products/pivit pin/jcb-king-pin-500x500.jpg"] 
            },
            { 
                id: 1006, 
                category: "pivot-pins", 
                title: "Lower Pivot Pin", 
                material: "Heat Treated Steel", 
                application: "Lower Boom/Arm Joint", 
                images: ["products/pivit pin/lowerpin.jpg"] 
            },
            { 
                id: 1007, 
                category: "pivot-pins", 
                title: "Pivot Pin 12400", 
                material: "Standard Alloy", 
                application: "General Pivot Assembly", 
                images: ["products/pivit pin/pivitpin12400.jpg"] 
            },
            { 
                id: 1008, 
                category: "pivot-pins", 
                title: "Pivot Pin 250x250", 
                material: "Heavy Duty Steel", 
                application: "Large Load Bearing", 
                images: ["products/pivit pin/pivot-pin-250x250.jpg"] 
            },
            { 
                id: 1009, 
                category: "pivot-pins", 
                title: "Single Hole Pin", 
                material: "Chrome Plated Steel", 
                application: "Hydraulic Cylinder End", 
                images: ["products/pivit pin/single hall pin.jpg"] 
            },
            { 
                id: 1010, 
                category: "pivot-pins", 
                title: "Tie Rod Pin", 
                material: "Forged Alloy", 
                application: "Steering Tie Rod", 
                images: ["products/pivit pin/tierot pin.jpg"] 
            },
            { 
                id: 1011, 
                category: "pivot-pins", 
                title: "Tie Rod Pin (Variant)", 
                material: "High Tensile Steel", 
                application: "Steering Assembly", 
                images: ["products/pivit pin/tierotpin.jpg"] 
            },
            { 
                id: 1012, 
                category: "pivot-pins", 
                title: "Upper Pivot Pin", 
                material: "Hardened Steel", 
                application: "Upper Boom Joint", 
                images: ["products/pivit pin/upperpin.jpg"] 
            },

            // --- Seal Kits (Folder: sealkits) ---
            { 
                id: 1101, 
                category: "seal-kits", 
                title: "JCB Seal Kit 332-Y6519", 
                material: "Rubber/Polyurethane", 
                application: "Hydraulic Cylinder Sealing", 
                images: ["products/sealkits/332-Y6519.jpeg"] 
            },
            { 
                id: 1102, 
                category: "seal-kits", 
                title: "JCB Seal Kit 332-Y6640", 
                material: "Rubber/Polyurethane", 
                application: "Hydraulic Cylinder Sealing", 
                images: ["products/sealkits/332-Y6640.webp"] 
            },
            { 
                id: 1103, 
                category: "seal-kits", 
                title: "JCB Seal Kit 332-Y3519", 
                material: "Rubber/Polyurethane", 
                application: "Hydraulic Cylinder Sealing", 
                images: ["products/sealkits/jcb seal kits 332-Y3519.webp"] 
            },
            { 
                id: 1104, 
                category: "seal-kits", 
                title: "JCB Seal Kit 332-Y5599", 
                material: "Rubber/Polyurethane", 
                application: "Hydraulic Cylinder Sealing", 
                images: ["products/sealkits/jcb seal kits 332-y5599.jpg"] 
            },

            // --- Tooth Points (Folder: tooth) ---
            { 
                id: 1201, 
                category: "tooth", 
                title: "Side Cutter", 
                material: "Forged Alloy Steel", 
                application: "Bucket Side Cutting", 
                images: ["products/tooth/sidecutter.jfif"] 
            },
            { 
                id: 1202, 
                category: "tooth", 
                title: "Bucket Tooth", 
                material: "Forged Alloy Steel", 
                application: "Bucket Digging Edge", 
                images: ["products/tooth/toth.jfif"] 
            },

            // --- Undercarriage Parts (Folder: under carriage parts) ---
            { 
                id: 1301, 
                category: "undercarriage", 
                title: "Idler Wheel", 
                material: "Heat Treated Steel", 
                application: "Track Tensioning", 
                images: ["products/under carriage parts/ideler.jfif"] 
            },
            { 
                id: 1302, 
                category: "undercarriage", 
                title: "Track Link Set", 
                material: "Forged Steel", 
                application: "Track Chain Assembly", 
                images: ["products/under carriage parts/link set.jpg"] 
            },
            { 
                id: 1303, 
                category: "undercarriage", 
                title: "Excavator Sprocket", 
                material: "Hardened Steel", 
                application: "Track Drive", 
                images: [
                    "products/under carriage parts/spocket.jfif",
                    "products/under carriage parts/spocket2.jfif",
                    "products/under carriage parts/spocket3.jfif"
                ] 
            },
            { 
                id: 1304, 
                category: "undercarriage", 
                title: "Track Adjuster Assembly", 
                material: "Steel/Spring", 
                application: "Track Tension Adjustment", 
                images: [
                    "products/under carriage parts/track adjuster assembly.jfif",
                    "products/under carriage parts/track adjuster assembly2.jfif"
                ] 
            },
            { 
                id: 1305, 
                category: "undercarriage", 
                title: "Track Roller", 
                material: "Forged Steel", 
                application: "Track Support", 
                images: [
                    "products/under carriage parts/track roller.jfif",
                    "products/under carriage parts/track roller2.jfif",
                    "products/under carriage parts/track roller3.jfif"
                ] 
            },
            { 
                id: 1306, 
                category: "undercarriage", 
                title: "Upper Roller", 
                material: "Forged Steel", 
                application: "Top Track Support", 
                images: ["products/under carriage parts/uper roller.jfif"] 
            }
        ];

        this.currentCategory = 'all';
        this.searchTerm = '';
        this.currentPage = 1;
        this.itemsPerPage = 12; // Max 12 products per page
        this.productGrid = document.getElementById('productGrid');
        this.paginationContainer = document.getElementById('paginationControls');
        
        if (this.productGrid) {
            this.init();
        }
    }

    init() {
        if (document.getElementById('categoryButtons')) {
            this.renderCategoryButtons();
        }
        
        // Handle URL parameters for category filtering
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam) {
            // Verify if category exists before setting it
            const categoryExists = this.categories.some(cat => cat.id === categoryParam);
            if (categoryExists) {
                this.currentCategory = categoryParam;
                
                // Update active state of buttons after they are rendered
                setTimeout(() => {
                    const btns = document.querySelectorAll('.category-btn');
                    btns.forEach(btn => {
                        if (btn.getAttribute('data-category') === categoryParam) {
                            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                        }
                    });
                }, 0);
            }
        }

        this.renderProducts();
        this.setupEventListeners();
    }

    renderCategoryButtons() {
        const container = document.getElementById('categoryButtons');
        container.innerHTML = ''; 
        
        this.categories.forEach(category => {
            const button = document.createElement('button');
            button.className = `category-btn ${category.id === 'all' ? 'active' : ''}`;
            button.setAttribute('data-category', category.id);
            button.innerHTML = `
                <i class="${category.icon}"></i>
                <span>${category.name}</span>
                <span class="category-count">${category.id === 'all' ? this.products.length : this.products.filter(p => p.category === category.id).length}</span>
            `;
            container.appendChild(button);
        });
    }

    renderProducts() {
        let filtered = this.getFilteredProducts();
        const isHomePage = document.body.classList.contains('home-page');
        this.productGrid.innerHTML = '';

        if (filtered.length === 0) {
            this.productGrid.innerHTML = '<div class="col-12 text-center py-5"><h4>No products found.</h4></div>';
            if (this.paginationContainer) this.paginationContainer.innerHTML = '';
            return;
        }

        let productsToRender = filtered;

        // Apply Logic: Home Page shows only 3. Products Page shows 12 per page.
        if (isHomePage) {
            productsToRender = filtered.slice(0, 3);
            if (this.paginationContainer) this.paginationContainer.innerHTML = '';
        } else {
            // Pagination Logic
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            productsToRender = filtered.slice(startIndex, endIndex);
            
            // Render Pagination Controls
            this.renderPagination(filtered.length);
        }

        productsToRender.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6 col-12 mb-4 scroll-element'; 
            
            // Logic to render single image OR slider
            let imageHtml = '';
            if (product.images && product.images.length > 1) {
                // Generate Carousel
                const carouselId = `carousel-${product.id}`;
                
                // Indicators
                const indicators = product.images.map((_, idx) => 
                    `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" aria-label="Slide ${idx + 1}"></button>`
                ).join('');

                // Slides
                const slides = product.images.map((img, idx) => `
                    <div class="carousel-item ${idx === 0 ? 'active' : ''}" style="height:100%">
                        <img src="${img}" class="d-block w-100" style="height:100%; object-fit:cover; object-position: center;" alt="${this.escapeHtml(product.title)}" onerror="this.src='https://placehold.co/300x200?text=No+Image'">
                    </div>
                `).join('');

                imageHtml = `
                    <div id="${carouselId}" class="carousel slide h-100" data-bs-ride="carousel" data-bs-interval="5000">
                        <div class="carousel-indicators" style="bottom:-10px;">${indicators}</div>
                        <div class="carousel-inner h-100">${slides}</div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev" style="filter: invert(1); position: absolute; left: 0; top: 0; bottom: 0; width: 40px; background: transparent; border: none; border-radius: 0; opacity: 1;">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next" style="filter: invert(1); position: absolute; right: 0; top: 0; bottom: 0; width: 40px; background: transparent; border: none; border-radius: 0; opacity: 1;">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                `;
            } else {
                // Single Image
                const singleImg = (product.images && product.images.length > 0) ? product.images[0] : 'https://placehold.co/300x200?text=No+Image';
                imageHtml = `<img src="${singleImg}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" alt="${this.escapeHtml(product.title)}" onerror="this.src='https://placehold.co/300x200?text=No+Image'">`;
            }

            col.innerHTML = `
                <div class="card custom-card">
                    <div class="image-container" style="position: relative; overflow: hidden; padding: 0;">
                        ${imageHtml}
                    </div>
                    <div class="card-content">
                        <h5 class="product-title">${this.escapeHtml(product.title)}</h5>
                        <div class="material">
                            <span class="label">Material:</span> ${this.escapeHtml(product.material)}
                        </div>
                        <div class="application">
                            <span class="label">Application:</span> ${this.escapeHtml(product.application)}
                        </div>
                        <div class="card-footer-custom">
                            <button class="NAVBTN request-quote-btn">Request Quotes</button>
                            <span class="stock-badge"><i class="fa-solid fa-inbox"></i> In stock</span>
                        </div>
                    </div>
                </div>
            `;
            this.productGrid.appendChild(col);
        });

        // Initialize animation for new elements
        if(window.scrollAnimator) window.scrollAnimator.init();
    }

    renderPagination(totalItems) {
        if (!this.paginationContainer) return;
        this.paginationContainer.innerHTML = '';
        
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);

        // Don't show controls if only 1 page
        if (totalPages <= 1) return;

        // Previous Button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.disabled = this.currentPage === 1;
        prevBtn.onclick = () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.renderProducts();
                window.scrollTo({ top: this.productGrid.offsetTop - 100, behavior: 'smooth' });
            }
        };
        this.paginationContainer.appendChild(prevBtn);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn ${this.currentPage === i ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.onclick = () => {
                this.currentPage = i;
                this.renderProducts();
                window.scrollTo({ top: this.productGrid.offsetTop - 100, behavior: 'smooth' });
            };
            this.paginationContainer.appendChild(pageBtn);
        }

        // Next Button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = this.currentPage === totalPages;
        nextBtn.onclick = () => {
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.renderProducts();
                window.scrollTo({ top: this.productGrid.offsetTop - 100, behavior: 'smooth' });
            }
        };
        this.paginationContainer.appendChild(nextBtn);
    }

    getFilteredProducts() {
        let filtered = this.products;

        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }

        if (this.searchTerm) {
            const lowerTerm = this.searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(lowerTerm) ||
                product.material.toLowerCase().includes(lowerTerm)
            );
        }

        return filtered;
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (btn) {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = btn.getAttribute('data-category');
                
                // Reset to page 1 when category changes
                this.currentPage = 1;
                this.renderProducts();
            }
        });

        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
            searchBox.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                // Reset to page 1 on search
                this.currentPage = 1;
                this.renderProducts();
            });
        }
    }

    escapeHtml(text) {
        if (!text) return '';
        return text.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
    }
}

/* =========================================
   3. Secure Form Manager
   ========================================= */
class SecureFormManager {
    constructor(formId, modalId = null) {
        this.form = document.getElementById(formId);
        this.modal = modalId ? document.getElementById(modalId) : null;
        this.init();
    }

    init() {
        if (!this.form) return;
        
        // --- Auto-set Return URL for GitHub Pages ---
        const nextInput = this.form.querySelector('input[name="_next"]');
        if (nextInput) {
            nextInput.value = window.location.href;
        }

        this.setupValidation();
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // --- 1. Phone Number Input Restriction (Numbers only) ---
        const phoneInput = this.form.querySelector('input[name="phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                // Remove non-numeric characters
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
            });
        }

        if (this.form.id === 'quoteForm') {
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('request-quote-btn')) {
                    e.preventDefault();
                    const card = e.target.closest('.custom-card');
                    this.openModal(card);
                }
                if (e.target.textContent.trim() === 'Get a Quote' && e.target.classList.contains('NAVBTN')) {
                    e.preventDefault();
                    this.openModal(null);
                }
                if (e.target.closest('#closeQuote') || e.target.id === 'quoteOverlay') {
                    this.closeModal();
                }
            });
        }
    }

    openModal(productCard) {
        if (!this.modal) return;
        const infoDiv = document.getElementById('selectedProduct');
        if (productCard) {
            const title = productCard.querySelector('.product-title').textContent;
            infoDiv.innerHTML = `<h4>${title}</h4>`;
            infoDiv.style.display = 'block';
        } else {
            infoDiv.innerHTML = `<h4>General Quote Request</h4>`;
            infoDiv.style.display = 'block';
        }
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        if (!this.modal) return;
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.form.reset();
        const success = this.modal.querySelector('.success-message');
        if(success) success.style.display = 'none';
        this.form.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
        this.form.querySelectorAll('.form-control, .modern-input').forEach(el => el.classList.remove('invalid', 'valid'));
    }

    setupValidation() {
        // Updated selector to target both .form-control and .modern-input
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.validateField(input));
            input.addEventListener('blur', () => this.validateField(input));
        });
    }

    validateField(field) {
        let isValid = true;
        // Look for error message in parent or sibling
        const errorDiv = field.parentElement.querySelector('.error-message') || field.nextElementSibling; 
        
        if (field.hasAttribute('required') && !field.value.trim()) isValid = false;
        
        if (field.type === 'email' && field.value) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(field.value)) {
                isValid = false;
                // --- 2. Enhanced Guidance for Email ---
                if(errorDiv) errorDiv.textContent = "Please include an '@' and a valid domain.";
            }
        }

        if (field.name === 'phone' && field.value) {
           if(field.value.length < 6) isValid = false;
        }

        if (isValid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            if (errorDiv && errorDiv.classList.contains('error-message')) errorDiv.style.display = 'none';
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            if (errorDiv && errorDiv.classList.contains('error-message')) errorDiv.style.display = 'block';
        }
        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();
        const honeypot = this.form.querySelector('input[name="website"]');
        if (honeypot && honeypot.value) return; 

        let allValid = true;
        this.form.querySelectorAll('input, textarea, select').forEach(input => {
            if (!this.validateField(input)) allValid = false;
        });

        if (!allValid) return;

        const btn = this.form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sending...';

        const formData = new FormData(this.form);

        try {
            await fetch('https://formsubmit.co/aashishtraderjcb@gmail.com', {
                method: 'POST',
                body: formData
            });

            // Updated selector for success message
            let successMsg = this.modal ? this.modal.querySelector('.success-message') : document.getElementById('successMessage');
            
            if (successMsg) {
                successMsg.style.display = 'block';
                successMsg.textContent = 'Request sent successfully!';
            }

            this.form.reset();
            if (this.modal) setTimeout(() => this.closeModal(), 2000);

        } catch (err) {
            alert('Something went wrong. Please try again.');
        } finally {
            btn.disabled = false;
            btn.textContent = originalText;
        }
    }
}

// --- 3. Country Codes List (Expanded) ---
const countryCodes = [
    { code: "+1", label: "🇺🇸 +1 (USA/Canada)" },
    { code: "+44", label: "🇬🇧 +44 (UK)" },
    { code: "+91", label: "🇮🇳 +91 (India)" },
    { code: "+971", label: "🇦🇪 +971 (UAE)" },
    { code: "+61", label: "🇦🇺 +61 (Australia)" },
    { code: "+86", label: "🇨🇳 +86 (China)" },
    { code: "+49", label: "🇩🇪 +49 (Germany)" },
    { code: "+33", label: "🇫🇷 +33 (France)" },
    { code: "+81", label: "🇯🇵 +81 (Japan)" },
    { code: "+7", label: "🇷🇺 +7 (Russia)" },
    { code: "+55", label: "🇧🇷 +55 (Brazil)" },
    { code: "+27", label: "🇿🇦 +27 (South Africa)" },
    { code: "+39", label: "🇮🇹 +39 (Italy)" },
    { code: "+34", label: "🇪🇸 +34 (Spain)" },
    { code: "+62", label: "🇮🇩 +62 (Indonesia)" },
    { code: "+966", label: "🇸🇦 +966 (Saudi Arabia)" },
    { code: "+82", label: "🇰🇷 +82 (South Korea)" },
    { code: "+90", label: "🇹🇷 +90 (Turkey)" },
    { code: "+52", label: "🇲🇽 +52 (Mexico)" },
    { code: "+20", label: "🇪🇬 +20 (Egypt)" },
    { code: "+92", label: "🇵🇰 +92 (Pakistan)" },
    { code: "+880", label: "🇧🇩 +880 (Bangladesh)" },
    { code: "+234", label: "🇳🇬 +234 (Nigeria)" },
    { code: "+63", label: "🇵🇭 +63 (Philippines)" },
    { code: "+84", label: "🇻🇳 +84 (Vietnam)" },
    { code: "+66", label: "🇹🇭 +66 (Thailand)" },
    { code: "+60", label: "🇲🇾 +60 (Malaysia)" },
    { code: "+31", label: "🇳🇱 +31 (Netherlands)" },
    { code: "+48", label: "🇵🇱 +48 (Poland)" }
];

function populateCountrySelects() {
    const selects = document.querySelectorAll('select[name="country_code"]');
    selects.forEach(select => {
        // Keep selected value if any
        const currentVal = select.value;
        select.innerHTML = ''; // Clear current
        
        countryCodes.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = country.label;
            select.appendChild(option);
        });

        // Set default if needed, though IP detect will override
        if (currentVal) select.value = currentVal;
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimator = new ScrollAnimator();
    new ProductCatalog();
    new SecureFormManager('contactForm');
    new SecureFormManager('quoteForm', 'quoteOverlay');
    
    // Populate dropdowns immediately
    populateCountrySelects();

    // --- 4. Auto-select Country Code based on IP (Improved) ---
    const detectCountry = async () => {
        try {
            // Try primary API (ipapi.co)
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('Primary API failed');
            const data = await response.json();
            const code = data.country_calling_code; // Usually returns "+91"
            setCountryCode(code);
        } catch (error) {
            // Fallback API (ipwho.is) - Free, no key required usually
            try {
                const response = await fetch('https://ipwho.is/');
                const data = await response.json();
                if (data.success) {
                    const code = data.calling_code; // Returns "91" (no plus)
                    setCountryCode(code);
                }
            } catch (e) {
                console.log("Auto-detect failed:", e);
            }
        }
    };

    const setCountryCode = (code) => {
        // Ensure code starts with +
        const formattedCode = code.toString().startsWith('+') ? code : `+${code}`;
        
        const selects = document.querySelectorAll('select[name="country_code"]');
        selects.forEach(select => {
            // Try finding exact match
            let option = select.querySelector(`option[value="${formattedCode}"]`);
            
            // If not found, try finding without + (just in case values changed)
            if (!option) {
                 option = select.querySelector(`option[value="${formattedCode.replace('+', '')}"]`);
            }

            if (option) {
                select.value = option.value;
                // Visual feedback (optional)
                select.style.borderColor = '#14ae5c'; 
            }
        });
    };

    detectCountry();
});