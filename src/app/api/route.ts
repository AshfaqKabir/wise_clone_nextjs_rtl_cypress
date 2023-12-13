import { NextResponse } from "next/server";
import { countryData } from "../../components/CountryList/countryData";

export async function GET() {
  return NextResponse.json([...countryData]);
}
