// Import the isAdmin middleware
const { isAdmin } = require('./middleware/auth.js');

// Mock user object with admin role
const adminUser = { id: '123', role: 'admin' };

// Mock request and response objects
const mockRequest = { user: adminUser }; // Simulate user being logged in as admin
const mockResponse = {
  status: jest.fn().mockReturnThis(), // Mock status function of response
  json: jest.fn(), // Mock json function of response
};

// Test case for isAdmin middleware
describe('isAdmin Middleware', () => {
  it('should allow access for admin user', () => {
    // Invoke the middleware with mock request, response, and a mock next function
    isAdmin(mockRequest, mockResponse, () => {});

    // Assert that the next function was called
    expect(mockResponse.status).not.toHaveBeenCalled(); // Ensure status function wasn't called
    expect(mockResponse.json).not.toHaveBeenCalled(); // Ensure json function wasn't called
  });

  it('should return 403 Forbidden for non-admin user', () => {
    // Mock user object with non-admin role
    const nonAdminUser = { id: '456', role: 'user' };
    const mockNonAdminRequest = { user: nonAdminUser };

    // Invoke the middleware with mock request, response, and a mock next function
    isAdmin(mockNonAdminRequest, mockResponse, () => {});

    // Assert that the status function was called with 403 and json function was called with the expected message
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
  });
});
