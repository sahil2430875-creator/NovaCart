/* ==========================================
   NOVACART - MULTI PAGE JAVASCRIPT
========================================== */


/* =========================
   PRODUCTS
========================= */

const products = [

{
id:1,
name:"Smartphone",
price:14999,
old:17999,
category:"Electronics",
rating:4.5,
reviews:328,
img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=90",
desc:"Modern smartphone with powerful performance and useful everyday features."
},

{
id:2,
name:"Laptop",
price:49999,
old:56999,
category:"Electronics",
rating:4.7,
reviews:214,
img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=90",
desc:"Powerful laptop for study, coding, work and entertainment."
},

{
id:3,
name:"Wireless Earbuds",
price:1499,
old:2199,
category:"Electronics",
rating:4.4,
reviews:562,
img:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=90",
desc:"Compact wireless earbuds with clear audio and comfortable fit."
},

{
id:4,
name:"Smartwatch",
price:2499,
old:3499,
category:"Electronics",
rating:4.3,
reviews:187,
img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=90",
desc:"Smart wearable for notifications and everyday activity tracking."
},

{
id:5,
name:"Bluetooth Speaker",
price:1299,
old:1899,
category:"Electronics",
rating:4.5,
reviews:301,
img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=90",
desc:"Portable speaker with powerful sound."
},

{
id:6,
name:"Smartphone Cover",
price:499,
old:799,
category:"Accessories",
rating:4.2,
reviews:420,
img:"https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=90",
desc:"Stylish and protective smartphone cover."
},

{
id:7,
name:"Wireless Mouse",
price:599,
old:999,
category:"Accessories",
rating:4.4,
reviews:244,
img:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=90",
desc:"Smooth and comfortable wireless mouse."
},

{
id:8,
name:"Wireless Keyboard",
price:1299,
old:1799,
category:"Accessories",
rating:4.5,
reviews:198,
img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=90",
desc:"Comfortable keyboard for work, coding and study."
},

{
id:9,
name:"Gaming Controller",
price:1799,
old:2499,
category:"Gaming",
rating:4.6,
reviews:166,
img:"https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=90",
desc:"Comfortable controller for gaming."
},

{
id:10,
name:"Digital Camera",
price:24999,
old:29999,
category:"Electronics",
rating:4.7,
reviews:92,
img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=90",
desc:"Capture high-quality photos and videos."
},

{
id:11,
name:"College Backpack",
price:899,
old:1299,
category:"Study",
rating:4.4,
reviews:350,
img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=90",
desc:"Stylish backpack for college and travel."
},

{
id:12,
name:"Oversized T-Shirt",
price:599,
old:999,
category:"Fashion",
rating:4.3,
reviews:280,
img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=90",
desc:"Comfortable everyday T-shirt."
},

{
id:13,
name:"Sports Shoes",
price:1299,
old:1999,
category:"Fashion",
rating:4.5,
reviews:418,
img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90",
desc:"Comfortable shoes for daily activities."
},

{
id:14,
name:"Phone Stand",
price:399,
old:699,
category:"Accessories",
rating:4.2,
reviews:145,
img:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=90",
desc:"Adjustable smartphone stand."
},

{
id:15,
name:"Smart LED Bulb",
price:699,
old:999,
category:"Home",
rating:4.4,
reviews:209,
img:"https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=90",
desc:"Modern LED bulb for home lighting."
},

{
id:16,
name:"Fast Charger",
price:799,
old:1199,
category:"Accessories",
rating:4.5,
reviews:375,
img:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=90",
desc:"Fast charging adapter for modern devices."
},

{
id:17,
name:"Gaming Headset",
price:1999,
old:2999,
category:"Gaming",
rating:4.6,
reviews:231,
img:"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=90",
desc:"Immersive audio headset for gaming."
},

{
id:18,
name:"HD Webcam",
price:1499,
old:2199,
category:"Electronics",
rating:4.3,
reviews:127,
img:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=90",
desc:"HD webcam for classes and meetings."
},

{
id:19,
name:"Tablet",
price:18999,
old:22999,
category:"Electronics",
rating:4.5,
reviews:110,
img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=90",
desc:"Portable tablet for entertainment and study."
},

{
id:20,
name:"Smart TV",
price:29999,
old:35999,
category:"Electronics",
rating:4.6,
reviews:78,
img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=90",
desc:"Large display smart TV."
},

{
id:21,
name:"Leather Wallet",
price:499,
old:799,
category:"Fashion",
rating:4.3,
reviews:264,
img:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=90",
desc:"Classic stylish wallet."
},

{
id:22,
name:"Stylish Sunglasses",
price:699,
old:999,
category:"Fashion",
rating:4.2,
reviews:183,
img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=90",
desc:"Trendy sunglasses for everyday use."
},

{
id:23,
name:"Denim Jeans",
price:1199,
old:1699,
category:"Fashion",
rating:4.4,
reviews:307,
img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=90",
desc:"Comfortable stylish denim jeans."
},

{
id:24,
name:"Baseball Cap",
price:399,
old:699,
category:"Fashion",
rating:4.1,
reviews:144,
img:"https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=90",
desc:"Trendy casual cap."
},

{
id:25,
name:"Water Bottle",
price:499,
old:799,
category:"Home",
rating:4.5,
reviews:391,
img:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=90",
desc:"Reusable water bottle for travel and college."
},

{
id:26,
name:"Desk Lamp",
price:899,
old:1299,
category:"Study",
rating:4.4,
reviews:211,
img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=90",
desc:"Modern desk lamp for study and work."
},

{
id:27,
name:"USB Hub",
price:699,
old:999,
category:"Accessories",
rating:4.3,
reviews:176,
img:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=90",
desc:"Multi-port USB hub for computers."
},

{
id:28,
name:"External SSD",
price:4999,
old:5999,
category:"Electronics",
rating:4.7,
reviews:88,
img:"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=90",
desc:"Fast portable storage."
},

{
id:29,
name:"Fitness Band",
price:1199,
old:1799,
category:"Electronics",
rating:4.2,
reviews:205,
img:"https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=800&q=90",
desc:"Fitness tracker for everyday activity."
},

{
id:30,
name:"Mechanical Keyboard",
price:2499,
old:3299,
category:"Gaming",
rating:4.6,
reviews:155,
img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=90",
desc:"Mechanical keyboard for gaming and coding."
},

{
id:31,
name:"Air Purifier",
price:7999,
old:9999,
category:"Home",
rating:4.5,
reviews:71,
img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=90",
desc:"Compact air purifier for home and office."
},

{
id:32,
name:"Coffee Maker",
price:2999,
old:3999,
category:"Home",
rating:4.4,
reviews:119,
img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=90",
desc:"Easy-to-use coffee maker."
}

];


/* =========================
   STORAGE
========================= */

let cart =
JSON.parse(
localStorage.getItem("novacart_cart")
) || [];


let wishlist =
JSON.parse(
localStorage.getItem("novacart_wishlist")
) || [];


/* =========================
   HELPERS
========================= */

const $ = selector =>
document.querySelector(selector);


const $$ = selector =>
[
    ...document.querySelectorAll(selector)
];


function money(value){

    return "₹" +
    Number(value)
    .toLocaleString("en-IN");

}


/* =========================
   SAVE
========================= */

function saveData(){

    localStorage.setItem(
        "novacart_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "novacart_wishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================
   COUNTS
========================= */

function cartCount(){

    return cart.reduce(
        (total,item) =>
        total + item.qty,
        0
    );

}


function cartTotal(){

    return cart.reduce(
        (total,item)=>{

            const product =
            products.find(
                p =>
                p.id === item.id
            );

            return total +
            (
                product
                ? product.price * item.qty
                : 0
            );

        },
        0
    );

}


/* =========================
   HEADER
========================= */

function updateHeader(){

    $$(".cart-count")
    .forEach(
        element =>
        element.textContent =
        cartCount()
    );


    $$(".wishlist-count")
    .forEach(
        element =>
        element.textContent =
        wishlist.length
    );

}


/* =========================
   TOAST
========================= */

function showToast(
    message,
    success=false
){

    let container =
    $("#toastContainer");


    if(!container){

        container =
        document.createElement(
            "div"
        );

        container.id =
        "toastContainer";

        document.body
        .appendChild(
            container
        );

    }


    const toast =
    document.createElement(
        "div"
    );


    toast.className =
    "toast" +
    (
        success
        ? " success"
        : ""
    );


    toast.textContent =
    message;


    container
    .appendChild(
        toast
    );


    setTimeout(
        () =>
        toast.remove(),
        2500
    );

}


/* =========================
   CART
========================= */

function addToCart(id){

    const product =
    products.find(
        p =>
        p.id === id
    );


    if(!product)
    return;


    const item =
    cart.find(
        item =>
        item.id === id
    );


    if(item){

        item.qty++;

    }
    else{

        cart.push({

            id:id,

            qty:1

        });

    }


    saveData();

    updateHeader();

    renderCartPage();


    showToast(
        product.name +
        " added to cart",
        true
    );

}


function changeQuantity(
    id,
    amount
){

    const item =
    cart.find(
        item =>
        item.id === id
    );


    if(!item)
    return;


    item.qty += amount;


    if(item.qty <= 0){

        cart =
        cart.filter(
            item =>
            item.id !== id
        );

    }


    saveData();

    updateHeader();

    renderCartPage();

}


function removeFromCart(id){

    cart =
    cart.filter(
        item =>
        item.id !== id
    );


    saveData();

    updateHeader();

    renderCartPage();


    showToast(
        "Product removed"
    );

}


/* =========================
   WISHLIST
========================= */

function toggleWishlist(id){

    if(
        wishlist.includes(id)
    ){

        wishlist =
        wishlist.filter(
            item =>
            item !== id
        );


        showToast(
            "Removed from wishlist"
        );

    }
    else{

        wishlist.push(id);


        showToast(
            "Added to wishlist",
            true
        );

    }


    saveData();

    updateHeader();

    renderProducts();

    renderWishlistPage();

}


/* =========================
   PRODUCT FILTER
========================= */

let state = {

    search:"",
    category:"all",
    maxPrice:50000,
    rating:0,
    sort:"featured"

};


function filteredProducts(){

    let result =
    products.filter(
        product => {

            const text =
            (
                product.name +
                " " +
                product.category +
                " " +
                product.desc
            )
            .toLowerCase();


            const searchMatch =
            text.includes(
                state.search
                .toLowerCase()
            );


            const categoryMatch =
            state.category === "all" ||

            product.category ===
            state.category ||

            (
                state.category ===
                "Deals" &&

                product.old >
                product.price
            );


            const priceMatch =
            product.price <=
            state.maxPrice;


            const ratingMatch =
            product.rating >=
            state.rating;


            return (

                searchMatch &&

                categoryMatch &&

                priceMatch &&

                ratingMatch

            );

        }
    );


    if(
        state.sort === "low"
    ){

        result.sort(
            (a,b) =>
            a.price - b.price
        );

    }


    if(
        state.sort === "high"
    ){

        result.sort(
            (a,b) =>
            b.price - a.price
        );

    }


    if(
        state.sort === "rating"
    ){

        result.sort(
            (a,b) =>
            b.rating - a.rating
        );

    }


    if(
        state.sort === "name"
    ){

        result.sort(
            (a,b) =>
            a.name.localeCompare(
                b.name
            )
        );

    }


    return result;

}


/* =========================
   PRODUCT CARD
========================= */

function productCard(product){

    const isWishlisted =
    wishlist.includes(
        product.id
    );


    const discount =
    Math.round(
        (
            1 -
            product.price /
            product.old
        ) * 100
    );


    return `

    <article
        class="product-card"
    >

        <button
            class="wish ${
                isWishlisted
                ? "active"
                : ""
            }"

            onclick="
                toggleWishlist(
                    ${product.id}
                )
            "
        >

            ${
                isWishlisted
                ? "♥"
                : "♡"
            }

        </button>


        <span class="discount">

            ${discount}% OFF

        </span>


        <div
            class="product-image"

            onclick="
                openProduct(
                    ${product.id}
                )
            "
        >

            <img
                src="${product.img}"
                alt="${product.name}"
                loading="lazy"
            >

        </div>


        <div class="product-info">

            <span class="product-category">

                ${product.category}

            </span>


            <h3>

                ${product.name}

            </h3>


            <p>

                ${product.desc}

            </p>


            <div class="rating">

                <span>
                    ★★★★★
                </span>

                ${product.rating}

                <small>
                    (${product.reviews})
                </small>

            </div>


            <div class="price-row">

                <div class="price">

                    ${money(
                        product.price
                    )}

                    <span class="old-price">

                        ${money(
                            product.old
                        )}

                    </span>

                </div>


                <button
                    class="add-btn"

                    onclick="
                        addToCart(
                            ${product.id}
                        )
                    "
                >

                    Add

                </button>

            </div>

        </div>

    </article>

    `;

}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(){

    const grid =
    $("#productGrid");


    if(!grid)
    return;


    const list =
    filteredProducts();


    const count =
    $("#resultCount");


    if(count){

        count.textContent =
        list.length;

    }


    grid.innerHTML =
    list
    .map(
        productCard
    )
    .join("");


    const noResults =
    $("#noResults");


    if(noResults){

        noResults
        .classList
        .toggle(
            "hidden",
            list.length !== 0
        );

    }

}


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(id){

    const product =
    products.find(
        p =>
        p.id === id
    );


    if(!product)
    return;


    const modal =
    $("#productModal");


    const content =
    $("#productModalContent");


    if(!modal || !content)
    return;


    content.innerHTML = `

        <div class="product-detail">

            <img
                src="${product.img}"
                alt="${product.name}"
            >


            <div>

                <span class="product-category">

                    ${product.category}

                </span>


                <h2>
                    ${product.name}
                </h2>


                <div class="rating">

                    <span>
                        ★★★★★
                    </span>

                    ${product.rating}

                    (${product.reviews}
                    reviews)

                </div>


                <p
                    class="product-description"
                >

                    ${product.desc}

                </p>


                <h2>

                    ${money(
                        product.price
                    )}

                    <del
                        class="old-price"
                    >

                        ${money(
                            product.old
                        )}

                    </del>

                </h2>


                <div
                    class="detail-buttons"
                >

                    <button
                        class="primary-btn"

                        onclick="
                            addToCart(
                                ${product.id}
                            );

                            closeModal();
                        "
                    >

                        Add to Cart

                    </button>


                    <button
                        class="secondary-btn"

                        onclick="
                            toggleWishlist(
                                ${product.id}
                            )
                        "
                    >

                        ♡ Wishlist

                    </button>

                </div>

            </div>

        </div>

    `;


    modal
    .classList
    .remove(
        "hidden"
    );

}


function closeModal(){

    $$(".modal")
    .forEach(
        modal =>
        modal.classList
        .add("hidden")
    );

}


/* =========================
   CART PAGE
========================= */

function renderCartPage(){

    const box =
    $("#cartPageItems");


    if(!box)
    return;


    const subtotal =
    cartTotal();


    const delivery =
    subtotal === 0
    ? 0
    : (
        subtotal >= 999
        ? 0
        : 79
    );


    const finalTotal =
    subtotal +
    delivery;


    if($("#cartSubtotal")){

        $("#cartSubtotal")
        .textContent =
        money(subtotal);

    }


    if($("#cartDelivery")){

        $("#cartDelivery")
        .textContent =
        delivery === 0
        ? "FREE"
        : money(delivery);

    }


    if($("#cartFinal")){

        $("#cartFinal")
        .textContent =
        money(finalTotal);

    }


    if(!cart.length){

        box.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add products to start shopping.
                </p>

                <a
                    href="products.html"
                    class="primary-btn"
                >
                    Continue Shopping
                </a>

            </div>

        `;

        return;

    }


    box.innerHTML =
    cart
    .map(
        item => {

            const product =
            products.find(
                p =>
                p.id === item.id
            );


            return `

            <div
                class="cart-page-item"
            >

                <img
                    src="${product.img}"
                    alt="${product.name}"
                >


                <div
                    class="item-main"
                >

                    <span
                        class="product-category"
                    >

                        ${product.category}

                    </span>


                    <h3>

                        ${product.name}

                    </h3>


                    <p>

                        ${money(
                            product.price
                        )}

                        each

                    </p>


                    <div
                        class="qty"
                    >

                        <button
                            onclick="
                                changeQuantity(
                                    ${product.id},
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        <b>
                            ${item.qty}
                        </b>


                        <button
                            onclick="
                                changeQuantity(
                                    ${product.id},
                                    1
                                )
                            "
                        >
                            +
                        </button>


                        <button
                            class="remove"

                            onclick="
                                removeFromCart(
                                    ${product.id}
                                )
                            "
                        >

                            Remove

                        </button>

                    </div>

                </div>


                <strong>

                    ${money(
                        product.price *
                        item.qty
                    )}

                </strong>

            </div>

            `;

        }
    )
    .join("");

}


/* =========================
   WISHLIST PAGE
========================= */

function renderWishlistPage(){

    const box =
    $("#wishlistPageItems");


    if(!box)
    return;


    if(!wishlist.length){

        box.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    ❤️
                </div>

                <h3>
                    Wishlist is empty
                </h3>

                <p>
                    Save products for later.
                </p>

                <a
                    href="products.html"
                    class="primary-btn"
                >
                    Browse Products
                </a>

            </div>

        `;

        return;

    }


    box.innerHTML =
    wishlist
    .map(
        id => {

            const product =
            products.find(
                p =>
                p.id === id
            );


            return `

            <div
                class="wish-page-item"
            >

                <img
                    src="${product.img}"
                    alt="${product.name}"
                >


                <div
                    class="item-main"
                >

                    <span
                        class="product-category"
                    >

                        ${product.category}

                    </span>


                    <h3>

                        ${product.name}

                    </h3>


                    <strong>

                        ${money(
                            product.price
                        )}

                    </strong>


                    <div
                        class="qty"
                    >

                        <button
                            onclick="
                                addToCart(
                                    ${product.id}
                                )
                            "
                        >

                            Add to Cart

                        </button>


                        <button
                            class="remove"

                            onclick="
                                toggleWishlist(
                                    ${product.id}
                                )
                            "
                        >

                            Remove

                        </button>

                    </div>

                </div>

            </div>

            `;

        }
    )
    .join("");

}


/* =========================
   CATEGORY
========================= */

function setCategory(
    category
){

    state.category =
    category;


    $$(".chip")
    .forEach(
        chip => {

            chip.classList.toggle(
                "active",

                chip.dataset.category ===
                category
            );

        }
    );


    if($("#categoryFilter")){

        $("#categoryFilter")
        .value =
        category;

    }


    renderProducts();

}


/* =========================
   PRODUCTS PAGE SETUP
========================= */

function setupProducts(){

    if(!$("#productGrid"))
    return;


    const params =
    new URLSearchParams(
        location.search
    );


    const category =
    params.get(
        "category"
    );


    const search =
    params.get(
        "search"
    );


    if(category){

        state.category =
        category;

    }


    if(search){

        state.search =
        search;


        if($("#searchInput")){

            $("#searchInput")
            .value =
            search;

        }

    }


    if($("#searchInput")){

        $("#searchInput")
        .addEventListener(
            "input",
            event => {

                state.search =
                event.target.value;

                renderProducts();

            }
        );

    }


    if($("#searchBtn")){

        $("#searchBtn")
        .addEventListener(
            "click",
            () => {

                renderProducts();

            }
        );

    }


    if($("#sortSelect")){

        $("#sortSelect")
        .addEventListener(
            "change",
            event => {

                state.sort =
                event.target.value;

                renderProducts();

            }
        );

    }


    if($("#categoryFilter")){

        $("#categoryFilter")
        .addEventListener(
            "change",
            event => {

                setCategory(
                    event.target.value
                );

            }
        );

    }


    if($("#ratingFilter")){

        $("#ratingFilter")
        .addEventListener(
            "change",
            event => {

                state.rating =
                Number(
                    event.target.value
                );

                renderProducts();

            }
        );

    }


    if($("#priceFilter")){

        $("#priceFilter")
        .addEventListener(
            "input",
            event => {

                state.maxPrice =
                Number(
                    event.target.value
                );


                if($("#priceLabel")){

                    $("#priceLabel")
                    .textContent =
                    money(
                        state.maxPrice
                    );

                }


                renderProducts();

            }
        );

    }


    if($("#filterBtn")){

        $("#filterBtn")
        .addEventListener(
            "click",
            () => {

                $("#filterPanel")
                .classList
                .toggle(
                    "show"
                );

            }
        );

    }


    if($("#clearFilters")){

        $("#clearFilters")
        .addEventListener(
            "click",
            () => {

                state = {

                    search:"",
                    category:"all",
                    maxPrice:50000,
                    rating:0,
                    sort:"featured"

                };


                if($("#searchInput"))
                    $("#searchInput")
                    .value = "";


                if($("#priceFilter"))
                    $("#priceFilter")
                    .value = 50000;


                if($("#priceLabel"))
                    $("#priceLabel")
                    .textContent =
                    "₹50,000";


                if($("#ratingFilter"))
                    $("#ratingFilter")
                    .value = 0;


                if($("#sortSelect"))
                    $("#sortSelect")
                    .value =
                    "featured";


                setCategory(
                    "all"
                );

            }
        );

    }


    if($("#resetSearch")){

        $("#resetSearch")
        .addEventListener(
            "click",
            () => {

                location.href =
                "products.html";

            }
        );

    }


    $$(".chip")
    .forEach(
        chip => {

            chip.addEventListener(
                "click",
                () => {

                    setCategory(
                        chip.dataset.category
                    );

                }
            );

        }
    );


    renderProducts();

}


/* =========================
   HOME PAGE
========================= */

function setupHome(){

    if($("#newsletterForm")){

        $("#newsletterForm")
        .addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const email =
                $("#emailInput")
                .value;


                showToast(
                    "Subscribed: " +
                    email,
                    true
                );


                event.target.reset();

            }
        );

    }


    $$(".category-link")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    location.href =
                    "products.html?category=" +
                    encodeURIComponent(
                        button.dataset.category
                    );

                }
            );

        }
    );


    if($("#dealBtn")){

        $("#dealBtn")
        .addEventListener(
            "click",
            () => {

                location.href =
                "products.html?category=Deals";

            }
        );

    }

}


/* =========================
   CHECKOUT
========================= */

function setupCheckout(){

    const form =
    $("#checkoutForm");


    if(!form)
    return;


    const subtotal =
    cartTotal();


    const delivery =
    subtotal === 0
    ? 0
    : (
        subtotal >= 999
        ? 0
        : 79
    );


    const total =
    subtotal +
    delivery;


    if($("#checkoutTotal")){

        $("#checkoutTotal")
        .textContent =
        money(total);

    }


    if(!cart.length){

        $("#checkoutEmpty")
        ?.classList
        .remove(
            "hidden"
        );


        form.classList
        .add(
            "hidden"
        );


        return;

    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const formData =
            new FormData(
                form
            );


            const name =
            formData.get(
                "name"
            );


            const payment =
            formData.get(
                "payment"
            );


            const orderId =
            "NC" +
            Date.now()
            .toString()
            .slice(-8);


            cart = [];


            saveData();

            updateHeader();


            form.reset();


            form.classList
            .add(
                "hidden"
            );


            $("#orderSuccess")
            .classList
            .remove(
                "hidden"
            );


            $("#orderMessage")
            .textContent =

            `Thank you ${name}! Your order ${orderId} has been successfully created using ${payment}.`;

        }
    );

}


/* =========================
   COMMON
========================= */

function setupCommon(){

    updateHeader();


    /* THEME */

    if(
        localStorage.getItem(
            "novacart_theme"
        ) === "dark"
    ){

        document.body
        .classList
        .add(
            "dark"
        );


        if($("#themeBtn")){

            $("#themeBtn")
            .textContent =
            "☀️";

        }

    }


    if($("#themeBtn")){

        $("#themeBtn")
        .addEventListener(
            "click",
            () => {

                document.body
                .classList
                .toggle(
                    "dark"
                );


                const dark =
                document.body
                .classList
                .contains(
                    "dark"
                );


                localStorage.setItem(
                    "novacart_theme",

                    dark
                    ? "dark"
                    : "light"
                );


                $("#themeBtn")
                .textContent =
                dark
                ? "☀️"
                : "🌙";

            }
        );

    }


    /* MOBILE MENU */

    if($("#menuBtn")){

        $("#menuBtn")
        .addEventListener(
            "click",
            () => {

                $("#navLinks")
                ?.classList
                .toggle(
                    "show"
                );

            }
        );

    }


    /* GLOBAL SEARCH */

    if($("#globalSearchBtn")){

        $("#globalSearchBtn")
        .addEventListener(
            "click",
            () => {

                const value =
                $("#globalSearch")
                .value
                .trim();


                location.href =
                value

                ? "products.html?search=" +
                  encodeURIComponent(
                      value
                  )

                : "products.html";

            }
        );

    }


    if($("#globalSearch")){

        $("#globalSearch")
        .addEventListener(
            "keydown",
            event => {

                if(
                    event.key ===
                    "Enter"
                ){

                    $("#globalSearchBtn")
                    ?.click();

                }

            }
        );

    }


    /* MODAL */

    $$(".modal-close")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                closeModal
            );

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if(
                event.key ===
                "Escape"
            ){

                closeModal();

            }

        }
    );

}


/* =========================
   START
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupCommon();

        setupHome();

        setupProducts();

        setupCheckout();

        renderCartPage();

        renderWishlistPage();

    }
);