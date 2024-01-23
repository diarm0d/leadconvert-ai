import React from "react";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prismadb";

const getLeadMagnets = async (userId: string) => {
  try {
    const leadMagnets = await prisma.leadMagnet.findMany({
      where: {
        userId,
      },
    });

    return leadMagnets;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getLeads = async (userId: string) => {
  try {
    const leads = await prisma.lead.findMany({
      where: {
        userId,
      },
    });

    return leads;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const LeadMagnetsPage = async () => {
  const { userId } = auth();

  if (!userId) return <div>No user found</div>;

  const leadMagnetsRequest = getLeadMagnets(userId);
  const leadRequest = getLeads(userId);

  const [leadMagnets, leads] = await Promise.all([
    leadMagnetsRequest,
    leadRequest,
  ]);

  console.log(leadMagnets);
  console.log(leads);
  
  return <div>LeadMagnetsPage</div>;
};

export default LeadMagnetsPage;
