import { db } from "../../database/firestore.js";

export interface RolesSchema {
  others_roles: {
    ausenteRoleId: string;
  };
  dp_roles: {
    diretoriadepessoalRoleId: string;
    ouvidoriadpRoleId: string;
  };
  dl_roles: {
    diretoriadelogisticaRoleId: string;
  };
  dec_roles: {
    diretoriadeeducacaoRoleId: string;
    instrutorRoleId: string;
    apmbbRoleId: string;
    essdRoleId: string;
  };
  correg_roles: {
    corregedoriaRoleId: string;
  };
  postos_roles: {
    oficiaisSuperioresRoleId: string;
  };
  empm_roles: {
    estadomaiorRoleId: string;
  }
}

export async function loadRolesFromDB(): Promise<RolesSchema> {
  const snapshot = await db.collection("roles").get();

  const result: any = {};

  snapshot.forEach((doc) => {
    result[doc.id] = doc.data();
  });

  return result as RolesSchema;
}

export const dbroles: RolesSchema = await loadRolesFromDB();

globalThis.dbroles = dbroles;