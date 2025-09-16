import { fetchData, buildEndpoint } from "./fetchUtils";

export async function getMembers() {
  return fetchData("Products");
}

export async function getTestimonials() {
  return fetchData("Testimonials");
}

export async function getServices() {
  return fetchData("Services");
}

export async function getReferences() {
  return fetchData("References");
}

export async function getValues() {
  return fetchData("Values");
}

export async function getArticles() {
  return fetchData("Blogs");
}

export async function getArticle(id) {
  return fetchData(buildEndpoint("blogs", id));
}

export async function getAbout() {
  return fetchData("about");
}

export async function getWorks() {
  return fetchData("Works");
}

export async function getProducts() {
  return fetchData("Products");
}

export async function getProductsByID(id) {
  return fetchData(buildEndpoint("Products", id));
}

export async function getHebergementSaasDesciption() {
  return fetchData("hebergement-saas-desciption");
}

export async function getHebergementsSaas() {
  return fetchData("hebergements-saas", { fallback: [] });
}

export async function getHebergementLocaleDesciption() {
  return fetchData("hebergement-local-desciption");
}

export async function getHebergementsLocale() {
  return fetchData("hebergements-locals", { fallback: [] });
}

export async function getTarification() {
  return fetchData("tarification");
}

export async function getHebergement() {
  return fetchData("hebergement");
}
