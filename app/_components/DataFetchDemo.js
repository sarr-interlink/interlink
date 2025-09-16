/**
 * Demo component showing how to use the reusable data fetching utilities
 * This demonstrates multiple ways to fetch data using the new hooks and utilities
 */
"use client";

import { useFetch, useFetchList, useFetchById } from "../_lib/useFetch";
import { fetchData } from "../_lib/fetchUtils";
import { useState } from "react";

export default function DataFetchDemo() {
  const [manualData, setManualData] = useState(null);

  // Example 1: Using useFetchList hook for fetching a list of resources
  const { data: products, loading: productsLoading, error: productsError } = useFetchList("Products");

  // Example 2: Using useFetchById hook for fetching a single resource by ID
  const { data: singleProduct, loading: singleLoading, error: singleError } = useFetchById("Products", 1);

  // Example 3: Using useFetch hook with custom options
  const { 
    data: references, 
    loading: referencesLoading, 
    error: referencesError, 
    refetch: refetchReferences 
  } = useFetch("References", { 
    fallback: { data: [] },
    params: "?populate=*&pagination[pageSize]=5" // Custom pagination
  });

  // Example 4: Manual data fetching using the utility function
  const handleManualFetch = async () => {
    try {
      const data = await fetchData("Services", {
        params: "?populate=*&pagination[pageSize]=3"
      });
      setManualData(data);
    } catch (error) {
      console.error("Manual fetch error:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Data Fetching Demo</h1>
      
      {/* Example 1: List of Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Products (useFetchList)</h2>
        {productsLoading && <p>Loading products...</p>}
        {productsError && <p className="text-red-500">Error: {productsError}</p>}
        {products?.data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.data.slice(0, 4).map((product) => (
              <div key={product.id} className="border p-4 rounded">
                <h3 className="font-bold">{product.attributes?.name || 'Unnamed Product'}</h3>
                <p className="text-gray-600">{product.attributes?.description || 'No description'}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Example 2: Single Product by ID */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Single Product (useFetchById)</h2>
        {singleLoading && <p>Loading single product...</p>}
        {singleError && <p className="text-red-500">Error: {singleError}</p>}
        {singleProduct?.data && (
          <div className="border p-4 rounded bg-blue-50">
            <h3 className="font-bold">{singleProduct.data.attributes?.name || 'Unnamed Product'}</h3>
            <p className="text-gray-600">{singleProduct.data.attributes?.description || 'No description'}</p>
          </div>
        )}
      </div>

      {/* Example 3: References with custom options and refetch */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">References (useFetch with options)</h2>
        <button 
          onClick={refetchReferences}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refetch References
        </button>
        {referencesLoading && <p>Loading references...</p>}
        {referencesError && <p className="text-red-500">Error: {referencesError}</p>}
        {references?.data && (
          <div className="flex flex-wrap gap-2">
            {references.data.map((ref) => (
              <span key={ref.id} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {ref.attributes?.Name || 'Unnamed Reference'}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Example 4: Manual fetch */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Manual Fetch (fetchData utility)</h2>
        <button 
          onClick={handleManualFetch}
          className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Fetch Services Manually
        </button>
        {manualData && (
          <div className="border p-4 rounded bg-green-50">
            <p className="font-semibold">Services fetched: {manualData.data?.length || 0}</p>
            {manualData.data?.slice(0, 3).map((service) => (
              <div key={service.id} className="mt-2">
                <span className="text-sm text-gray-600">
                  {service.attributes?.name || service.attributes?.title || 'Unnamed Service'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="bg-gray-100 p-6 rounded">
        <h3 className="text-xl font-semibold mb-3">How to use these utilities:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>useFetchList(resource)</strong> - For fetching lists of data</li>
          <li><strong>useFetchById(resource, id)</strong> - For fetching single items by ID</li>
          <li><strong>useFetch(endpoint, options)</strong> - For custom fetch needs with options</li>
          <li><strong>fetchData(endpoint, options)</strong> - For manual/programmatic data fetching</li>
        </ol>
      </div>
    </div>
  );
}