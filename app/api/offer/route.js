// // app/api/offers/route.js
// import { NextResponse } from 'next/server';
// import connectDB from '@/app/lib/mongodb';
// import Offer from '@/app/models/Offer';

// // GET: Fetch all offers
// export async function GET() {
//   try {
//     await connectDB();
//     const offers = await Offer.find({});
//     return NextResponse.json(offers, { status: 200 });
//   } catch (error) {
//     console.error('GET Error:', error);
//     return NextResponse.json({ error: 'Failed to fetch offers', details: error.message }, { status: 500 });
//   }
// }

// // POST: Create a new offer
// export async function POST(request) {
//   try {
//     await connectDB();
//     const data = await request.json();
//     console.log('Received POST data:', data);
//     const newOffer = new Offer(data);
//     console.log('New Offer:', newOffer);
//     await newOffer.save();
//     return NextResponse.json(newOffer, { status: 201 });
//   } catch (error) {
//     console.error('POST Error:', error);
//     return NextResponse.json(
//       { error: 'Failed to create offer', details: error.message },
//       { status: 500 }
//     );
//   }
// }
// app/api/offers/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Offer from '@/app/models/Offer';

// GET: Fetch all offers
// GET: Fetch all offers
export async function GET() {
  try {
    await connectDB();
    const offers = await Offer.find({});
    return NextResponse.json(offers, { status: 200 });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch offers', details: error.message }, { status: 500 });
  }
}

// POST: Create a new offer
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    console.log('Received POST data:', data);
    const newOffer = new Offer(data);
    await newOffer.save();
    console.log('New Offer created:', newOffer);
    return NextResponse.json(newOffer, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { error: 'Failed to create offer', details: error.message },
      { status: 500 }
    );
  }
}