import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ProductType } from "./types/ProductType";
import { TestimonialType } from "./types/TestimonialType";
import { ServiceType } from "./types/ServiceType";
import { ValueType } from "./types/ValuesType";
import { HSaasDescriptionType } from "./types/HSaasDescription";
import { HSaas } from "./types/HSaas";
import { ReferenceType } from "./types/ReferenceType";
import { HebergementType } from "./types/HebergementType";
import { HebergementLocalDesciptionType } from "./types/HebergementLocalDesc";
import { HebergementLocalType } from "./types/HebergementLocal";
import { TarificationType } from "./types/TarificationTYpe";

// BASE_URL is the URL of the Strapi API in development
// const BASE_URL = "http://localhost:1338/api";

// BASE_URL is the URL of the Strapi API in production
const BASE_URL: string = `${STRAPI_URL}/api`;

// POPULATE_PARAMAS is a query string that tells Strapi to populate all related data
const POPULATE_PARAMAS: string = "?populate=*&pagination[pageSize]=10";


//members but fetching products not consistent.
export async function getMembers(): Promise<{data: ProductType[]} | []>  {
  try {
    const response: Response = await fetch(`${BASE_URL}/Members${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching members");
    }

    const data: {data: ProductType[]} = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getTestimonials(): Promise<{data: TestimonialType[]}>  {
  try {
    const response: Response = await fetch(
      `${BASE_URL}/Testimonials${POPULATE_PARAMAS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching testimonials");
    }

    const data: {data: TestimonialType[]} = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return {data: []}; // Return an empty array or handle the error as needed
  }
}

export async function getServices(): Promise<{data: ServiceType[]}> {
  try {
    const response: Response = await fetch(`${BASE_URL}/Services${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching services");
    }

    const data:{data: ServiceType[]} = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return {data: []}; // Return an empty array or handle the error as needed
  }
}

export async function getReferences(): Promise<{data: ReferenceType[]}> {
  try {
    const response: Response = await fetch(`${BASE_URL}/References${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching references");
    }

    const data: {data: ReferenceType[]} = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return {data: []}; // Return an empty array or handle the error as needed
  }
}

export async function getValues(): Promise<{data: ValueType[]}> {
  try {
    const response: Response = await fetch(`${BASE_URL}/Values${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching values");
    }

    const data: {data: ValueType[]} = await response.json();
    //console.log("values data", data); // You can remove this in production

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return {data: []}; // Return an empty array or handle the error as needed
  }
}

export async function getArticles() {
  try {
    const url = `${BASE_URL}/Blogs${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching articles");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch articles error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getArticle(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching articles");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch articles error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getAbout() {
  try {
    const url = `${BASE_URL}/about${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching about");
    }

    const data = await response.json();
    // console.log("About data:", data.data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch articles error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getWorks() {
  try {
    const url = `${BASE_URL}/Works${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching ");
    }

    const data = await response.json();
    // console.log("About data:", data.data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch  error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getProducts(): Promise<{data: ProductType[]}> {
  try {
    const url = `${BASE_URL}/Products${POPULATE_PARAMAS}`;

    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching ");
    }

    const data: {data: ProductType[]} = await response.json();
    // console.log("About data:", data.data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch  error:", error);
    console.warn("Fetch  error:");
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}



export async function getProductsByID(id: number): Promise<{data: ProductType}> {
  try {
    const url = `${BASE_URL}/Products/${id}${POPULATE_PARAMAS}`;

    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching product by ID");
    }

    const data: {data: ProductType} = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: {} as ProductType }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergementSaasDesciption(): Promise<{data: HSaasDescriptionType}> {
  try {
    const url = `${BASE_URL}/hebergement-saas-desciption${POPULATE_PARAMAS}`;

    const response:Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching hebergement saas desciption");
    }

    const data: {data: HSaasDescriptionType} = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch hebergement-saas-desciption error:", error);
    return { data: {} as HSaasDescriptionType }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergementsSaas(): Promise<{data: HSaas[]}> {
  try {
    const response: Response = await fetch(
      `${BASE_URL}/hebergements-saas${POPULATE_PARAMAS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching hebergement-saas:", response.statusText);
      throw new Error("Error fetching hebergement-saas");
    }

    const data: {data: HSaas[]} = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return {data: []}; // Return an empty array or handle the error as needed
  }
}

export async function getHebergementLocaleDesciption(): Promise<{data: HebergementLocalDesciptionType}> {
  try {
    const url = `${BASE_URL}/hebergement-local-desciption${POPULATE_PARAMAS}`;

    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error(
        "Error fetching hebergement-local-desciption saas desciption"
      );
    }

    const data: {data: HebergementLocalDesciptionType} = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch hebergement-locale-desciption error:", error);
    return { data: {} as HebergementLocalDesciptionType  }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergementsLocale(): Promise<{data: HebergementLocalType[]}> {
  try {
    const response: Response = await fetch(
      `${BASE_URL}/hebergements-locals${POPULATE_PARAMAS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching hebergements-local:", response.statusText);
      throw new Error("Error fetching hebergement-local");
    }

    const data: {data: HebergementLocalType[]} = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return {data: []}; // Return an empty array or handle the error as needed
  }
}
export async function getTarification(): Promise<{data: TarificationType}> {
  try {
    const url = `${BASE_URL}/tarification${POPULATE_PARAMAS}`;

    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching tarification saas desciption");
    }

    const data: {data: TarificationType} = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch tarification error:", error);
    return { data: {} as TarificationType }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergement(): Promise<{data: HebergementType}> {
  try {
    const url = `${BASE_URL}/hebergement${POPULATE_PARAMAS}`;

    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching hebergement");
    }

    const data: {data: HebergementType} = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch hebergement error:", error);
    return { data: {} as HebergementType }; // Ensure the return type matches the expected structure
  }
}
