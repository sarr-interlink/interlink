"use client";

import { useState, useEffect } from "react";
import { fetchData } from "./fetchUtils";

/**
 * Custom hook for fetching data from Strapi API
 * @param {string} endpoint - The API endpoint to fetch from
 * @param {Object} options - Fetch options
 * @param {Array} dependencies - Dependencies array for useEffect (default: [])
 * @returns {Object} { data, loading, error, refetch }
 */
export function useFetch(endpoint, options = {}, dependencies = []) {
  const [data, setData] = useState(options.fallback || { data: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataCallback = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchData(endpoint, options);
      setData(result);
    } catch (err) {
      console.error("Error in useFetch:", err);
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endpoint) {
      fetchDataCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, ...dependencies]);

  const refetch = () => {
    fetchDataCallback();
  };

  return { data, loading, error, refetch };
}

/**
 * Hook for fetching data by ID
 * @param {string} resource - The resource name (e.g., 'Products')
 * @param {string|number} id - The resource ID
 * @param {Object} options - Fetch options
 * @returns {Object} { data, loading, error, refetch }
 */
export function useFetchById(resource, id, options = {}) {
  const endpoint = id ? `${resource}/${id}` : null;
  return useFetch(endpoint, options, [id]);
}

/**
 * Hook for fetching a list of resources
 * @param {string} resource - The resource name (e.g., 'Products')
 * @param {Object} options - Fetch options
 * @returns {Object} { data, loading, error, refetch }
 */
export function useFetchList(resource, options = {}) {
  return useFetch(resource, options);
}