document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
    
    // Smooth scrolling for category links
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 100; // Account for sticky header
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                categoryLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Shopping cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.querySelector('.close-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const cartCount = document.querySelector('.cart-count');
    const totalAmount = document.querySelector('.total-amount');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // Cart array to store items
    let cart = [];
    
    // Toggle cart modal
    if (cartIcon && cartModal) {
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('open');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('open');
        });
    }
    
    // Add to cart functionality
    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productCard = button.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('.product-price').textContent;
                
                // Check if there's a sale price
                let price;
                if (productCard.querySelector('.sale-price')) {
                    price = productCard.querySelector('.sale-price').textContent;
                } else {
                    price = productPrice;
                }
                
                // Clean price string and convert to number
                price = parseFloat(price.replace('$', ''));
                
                // Get product image src (for actual implementation with real images)
                let imageSrc = '';
                const imageElement = productCard.querySelector('.product-image img');
                if (imageElement) {
                    imageSrc = imageElement.src;
                }
                
                // Check if item already in cart
                const existingItem = cart.find(item => item.name === productName);
                
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({
                        name: productName,
                        price: price,
                        image: imageSrc,
                        quantity: 1
                    });
                }
                
                // Update cart UI
                updateCart();
                
                // Show cart modal
                cartModal.classList.add('open');
            });
        });
    }
    
    // Update cart function
    function updateCart() {
        // Update cart count
        if (cartCount) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
        
        // Update cart items display
        if (cartItems) {
            // Clear current items
            while (cartItems.firstChild) {
                if (cartItems.firstChild.classList && cartItems.firstChild.classList.contains('empty-cart-message')) {
                    break;
                }
                cartItems.removeChild(cartItems.firstChild);
            }
            
            // Show or hide empty cart message
            if (cart.length === 0) {
                if (emptyCartMessage) {
                    emptyCartMessage.style.display = 'block';
                }
            } else {
                if (emptyCartMessage) {
                    emptyCartMessage.style.display = 'none';
                }
                
                // Add cart items
                cart.forEach((item, index) => {
                    const cartItem = document.createElement('div');
                    cartItem.classList.add('cart-item');
                    
                    cartItem.innerHTML = `
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                        </div>
                        <div class="cart-item-actions">
                            <button class="quantity-btn decrease" data-index="${index}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-index="${index}">+</button>
                            <button class="remove-btn" data-index="${index}">×</button>
                        </div>
                    `;
                    
                    cartItems.insertBefore(cartItem, emptyCartMessage);
                });
                
                // Add event listeners to new buttons
                document.querySelectorAll('.increase').forEach(button => {
                    button.addEventListener('click', () => {
                        const index = button.getAttribute('data-index');
                        cart[index].quantity++;
                        updateCart();
                    });
                });
                
                document.querySelectorAll('.decrease').forEach(button => {
                    button.addEventListener('click', () => {
                        const index = button.getAttribute('data-index');
                        if (cart[index].quantity > 1) {
                            cart[index].quantity--;
                        } else {
                            cart.splice(index, 1);
                        }
                        updateCart();
                    });
                });
                
                document.querySelectorAll('.remove-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        const index = button.getAttribute('data-index');
                        cart.splice(index, 1);
                        updateCart();
                    });
                });
            }
            
            // Update total
            if (totalAmount) {
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                totalAmount.textContent = `$${total.toFixed(2)}`;
            }
        }
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Thank you for your order! This would proceed to checkout in a live site.');
                cart = [];
                updateCart();
                cartModal.classList.remove('open');
            } else {
                alert('Your cart is empty. Add some products first!');
            }
        });
    }
    
    // Additional CSS for cart items
    const style = document.createElement('style');
    style.textContent = `
        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid var(--gray-200);
        }
        
        .cart-item-details h4 {
            margin: 0 0 5px 0;
            font-size: 1rem;
        }
        
        .cart-item-price {
            color: var(--gray-600);
            font-size: 0.9rem;
        }
        
        .cart-item-actions {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .quantity-btn {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px solid var(--gray-300);
            background: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            cursor: pointer;
        }
        
        .quantity {
            margin: 0 5px;
        }
        
        .remove-btn {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: none;
            background-color: var(--gray-200);
            color: var(--gray-700);
            font-size: 1rem;
            cursor: pointer;
            margin-left: 10px;
        }
        
        .remove-btn:hover {
            background-color: var(--danger-color);
            color: white;
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .nav-links.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 20px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `;
    
    document.head.appendChild(style);
}); 