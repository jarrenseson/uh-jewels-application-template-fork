import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import Image from 'next/image';

// Extend the ProductName type to include the placeholder value
type ProductName = 'Drop Bracelet' | 'The Kona' | 'Blue Dream' | '-----------------------------';

interface SelectedProduct {
  product: ProductName;
  quantity: number;
  price: number; // Add price to SelectedProduct
}

const OrderPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductName>('-----------------------------');
  const [productImage, setProductImage] = useState<string>('');
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  // Map of product names to images
  const productImages: Record<ProductName, string> = {
    'Drop Bracelet': '/bracelet.png',
    'The Kona': '/chokernecklace.png',
    'Blue Dream': '/necklace.png',
    '-----------------------------': '', // Option for the placeholder
  };

  // Map of product names to prices
  const productPrices: Record<ProductName, number> = {
    'Drop Bracelet': 30, // Set the price for Drop Bracelet
    'The Kona': 50, // Set the price for The Kona
    'Blue Dream': 40, // Set the price for Blue Dream
    '-----------------------------': 0, // Placeholder price
  };

  // Handle product selection from the dropdown
  const handleSelect = (product: string) => {
    if (product === '-----------------------------' || product in productImages) {
      setSelectedProduct(product as ProductName);
      setProductImage(productImages[product as ProductName] || '');
    }
  };

  // Handle adding more products with quantity
  const handleAddMore = (quantity: number) => {
    const validQuantity = Number.isNaN(quantity) || quantity <= 0 ? 1 : quantity; // Ensure valid quantity

    if (selectedProduct !== '-----------------------------'
        && !selectedProducts.some((p) => p.product === selectedProduct)) {
      const price = productPrices[selectedProduct]; // Get the price of the selected product
      setSelectedProducts([
        ...selectedProducts,
        { product: selectedProduct, quantity: validQuantity, price },
      ]);
    } else {
      // If the product is already selected, update the quantity and price
      setSelectedProducts(
        selectedProducts.map((p) => (p.product === selectedProduct
          ? { ...p, quantity: p.quantity + validQuantity, price: productPrices[selectedProduct] }
          : p)),
      );
    }
    setSelectedProduct('-----------------------------'); // Reset the dropdown after selection
  };

  // Filter dropdown items to exclude already selected products
  const filteredProducts = (['Drop Bracelet', 'The Kona', 'Blue Dream'] as ProductName[]).filter(
    (product) => !selectedProducts.some((p) => p.product === product),
  );

  // Handle editing product quantity
  const handleEditQuantity = (product: ProductName, newQuantity: string) => {
    const parsedQuantity = parseInt(newQuantity, 10);
    const validQuantity = Number.isNaN(parsedQuantity)
    || parsedQuantity <= 0 ? 1 : parsedQuantity; // Ensure valid quantity
    setSelectedProducts(
      selectedProducts.map((p) => (p.product === product
        ? { ...p, quantity: validQuantity, price: productPrices[product] } // Update the price whenever quantity changes
        : p)),
    );
  };

  // Handle removing a product from the selected list
  const handleRemoveProduct = (product: ProductName) => {
    setSelectedProducts(selectedProducts.filter((p) => p.product !== product));
  };

  // Calculate the total price of all selected products
  const calculateTotalPrice = () => selectedProducts.reduce((total, product) => {
    const validQuantity = Number.isNaN(product.quantity) || product.quantity <= 0 ? 1 : product.quantity;
    return total + product.price * validQuantity;
  }, 0);

  const pathName = usePathname();

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center">
            <h2>Order Form</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <h5>Style</h5>
                  </Col>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {selectedProduct}
                      </Dropdown.Toggle>
                      <Dropdown.Menu data-bs-theme="light">
                        <Dropdown.Item onClick={() => handleSelect('-----------------------------')}>
                          -----------------------------
                        </Dropdown.Item>
                        {filteredProducts.map((product) => (
                          <Dropdown.Item key={product} onClick={() => handleSelect(product)}>
                            {product}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col />
                  <Col>
                    <h5>Quantity</h5>
                  </Col>
                  <Col>
                    <Col>
                      <Form.Group>
                        <input
                          type="number"
                          min="1"
                          defaultValue="1"
                          id="quantity"
                          style={{ width: '50%', height: '35px' }}
                          disabled={
                            selectedProduct === '-----------------------------'
                        } // Disable the input if placeholder is selected
                        />
                      </Form.Group>
                    </Col>
                  </Col>
                </Row>
              </Form>

              {/* Display the selected product image */}
              {productImage && (
                <Row className="mt-3">
                  <Col className="text-center">
                    <Image
                      src={productImage}
                      alt={selectedProduct}
                      width={300} // Set an appropriate width
                      height={300} // Set an appropriate height
                      style={{
                        objectFit: 'contain', // Ensures the image maintains its aspect ratio
                        maxWidth: '100%', // Ensures the image fits within the container's width
                        maxHeight: '100%', // Ensures the image fits within the container's height
                      }}
                    />
                  </Col>
                </Row>
              )}

              {/* Display selected products and their quantities */}
              <Row className="mt-3">
                <Col className="text-center">
                  <h5>Selected Products:</h5>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {selectedProducts.map((product) => (
                      <li key={product.product}>
                        {product.product}
                        {' '}
                        - Quantity:
                        {' '}
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) => handleEditQuantity(product.product, e.target.value)}
                          style={{ width: '60px' }}
                          disabled={
                            product.product === '-----------------------------'
                        } // Disable quantity change for the placeholder product
                        />
                        {' '}
                        - $
                        {product.price}
                        {' '}
                        each
                        {' '}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveProduct(product.product)}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>

              {/* Display total price */}
              <Row className="mt-3">
                <Col className="text-center">
                  <h5>
                    Total Price: $
                    {calculateTotalPrice()}
                  </h5>
                </Col>
              </Row>

              {/* Add More Button */}
              <Row className="mt-3">
                <Col className="text-center">
                  <Button
                    variant="dark"
                    onClick={() => {
                      const quantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value, 10);
                      handleAddMore(quantity);
                    }}
                    disabled={
                        selectedProduct === '-----------------------------'
                    } // Disable the button if placeholder is selected
                  >
                    Confirm Selection
                  </Button>
                </Col>
              </Row>

              <Row>
                <Button
                  variant="secondary"
                  href="/payment"
                  active={pathName === '/payment'}
                  className="ms-auto me-auto mt-4"
                  style={{ width: '98%' }}
                >
                  Continue to Payment Page
                  {' >>> '}
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
