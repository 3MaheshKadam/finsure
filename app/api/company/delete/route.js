import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Company from '@/app/models/Company';

// DELETE: Delete company details
export async function DELETE() {
  try {
    await connectDB();
    const deletedCompany = await Company.deleteOne({});
    if (deletedCompany.deletedCount === 0) {
      return NextResponse.json({ error: 'Company details not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Company details deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete company details' }, { status: 500 });
  }
}