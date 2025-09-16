import { STRAPI_URL } from "./utils";

// BASE_URL is the URL of the Strapi API in production
const BASE_URL = `${STRAPI_URL}/api`;

// POPULATE_PARAMS is a query string that tells Strapi to populate all related data
const POPULATE_PARAMS = "?populate=*&pagination[pageSize]=10";

/**
 * Generic fetch utility function for Strapi API calls
 * @param {string} endpoint - The API endpoint (e.g., 'Products', 'blogs/1')
 * @param {Object} options - Additional fetch options
 * @param {string} options.method - HTTP method (default: 'GET')
 * @param {Object} options.headers - Additional headers
 * @param {any} options.body - Request body
 * @param {string} options.params - Custom query parameters (default: populate all)
 * @param {any} options.fallback - Fallback value on error (default: { data: [] })
 * @returns {Promise<any>} The fetched data or fallback value
 */
export async function fetchData(endpoint, options = {}) {
  const {
    method = "GET",
    headers = {},
    body,
    params = POPULATE_PARAMS,
    fallback = { data: [] },
  } = options;

  try {
    const url = `${BASE_URL}/${endpoint}${params}`;
    
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body && method !== "GET") {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      console.error(`Error fetching ${endpoint}:`, response.statusText);
      throw new Error(`Error fetching ${endpoint}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch ${endpoint} error:`, error);
    return fallback;
  }
}

/**
 * Builds a Strapi endpoint with optional ID
 * @param {string} resource - The resource name (e.g., 'Products')
 * @param {string|number} id - Optional resource ID
 * @returns {string} The complete endpoint
 */
export function buildEndpoint(resource, id = null) {
  return id ? `${resource}/${id}` : resource;
}