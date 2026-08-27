# J&C Chili Garlic With Pork

Official static website and online ordering page for **J&C Chili Garlic With Pork**, Poblacion, Salay, Misamis Oriental.

## Website pages

- Home — `index.html`
- About — `about.html`
- Products — `products.html`
- Order Now — `order.html`
- Reviews — `reviews.html`
- Contact — `contact.html`
- Terms & Conditions — `terms.html`

## Ordering features

- ₱150 per 250g jar
- Quantity controls from 1–50 jars
- Automatic subtotal calculation
- ₱50 standard delivery fee
- Free delivery at ₱700+ subtotal
- Philippine mobile-number validation
- Complete delivery-address validation
- COD, GCash, and Maya payment choices
- Order reference generation
- Local browser storage of the most recent order
- Ready-to-send WhatsApp order message
- Mobile-friendly navigation and responsive layout
- Product image and brand assets from the repository
- Accessible keyboard focus states and reduced-motion support

## Order flow

1. Customer opens **Order Now**.
2. Customer enters name, mobile number, address, landmark, and notes.
3. Customer chooses quantity and payment method.
4. The page calculates subtotal, delivery fee, and total automatically.
5. Customer accepts the Terms & Conditions.
6. The website creates an order reference and prepares a complete WhatsApp message.
7. The customer sends the message to J&C through WhatsApp for confirmation.

## Important

This is a static GitHub Pages website, so it does not expose private API keys or store orders in a server database. Order transmission is handled through the customer's WhatsApp app/web session. GCash and Maya payment instructions should be confirmed directly with J&C rather than hard-coded into the public site.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/static.yml` that publishes the static site to GitHub Pages whenever changes are pushed to `main`.
