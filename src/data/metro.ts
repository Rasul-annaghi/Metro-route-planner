export type Line = 'red' | 'green' | 'purple';

export interface Station {
  id: string;
  nameEn: string;
  nameAz: string;
  lines: Line[];
}

export const stations: Station[] = [
  { id: 'icherisheher', nameEn: 'Icherisheher', nameAz: 'İçərişəhər', lines: ['red'] },
  { id: 'sahil', nameEn: 'Sahil', nameAz: 'Sahil', lines: ['red'] },
  { id: '28may', nameEn: '28 May', nameAz: '28 May', lines: ['red', 'green'] },
  { id: 'ganjlik', nameEn: 'Ganjlik', nameAz: 'Gənclik', lines: ['red', 'green'] },
  { id: 'nariman_narimanov', nameEn: 'Nariman Narimanov', nameAz: 'Nəriman Nərimanov', lines: ['red', 'green'] },
  { id: 'ulduz', nameEn: 'Ulduz', nameAz: 'Ulduz', lines: ['red', 'green'] },
  { id: 'koroglu', nameEn: 'Koroglu', nameAz: 'Koroğlu', lines: ['red', 'green'] },
  { id: 'gara_garayev', nameEn: 'Gara Garayev', nameAz: 'Qara Qarayev', lines: ['red', 'green'] },
  { id: 'neftchiler', nameEn: 'Neftchiler', nameAz: 'Neftçilər', lines: ['red', 'green'] },
  { id: 'xalqlar_dostlugu', nameEn: 'Xalqlar Dostlugu', nameAz: 'Xalqlar Dostluğu', lines: ['red', 'green'] },
  { id: 'ahmadli', nameEn: 'Ahmadli', nameAz: 'Əhmədli', lines: ['red', 'green'] },
  { id: 'hazi_aslanov', nameEn: 'Hazi Aslanov', nameAz: 'Həzi Aslanov', lines: ['red', 'green'] },
  { id: 'bakmil', nameEn: 'Bakmil', nameAz: 'Bakmil', lines: ['red'] },
  { id: 'darnagul', nameEn: 'Darnagul', nameAz: 'Dərnəgül', lines: ['green'] },
  { id: 'azadlig_prospekti', nameEn: 'Azadlig prospekti', nameAz: 'Azadlıq prospekti', lines: ['green'] },
  { id: 'nasimi', nameEn: 'Nasimi', nameAz: 'Nəsimi', lines: ['green'] },
  { id: 'memar_ajami', nameEn: 'Memar Ajami', nameAz: 'Memar Əcəmi', lines: ['green', 'purple'] },
  { id: '20yanvar', nameEn: '20 Yanvar', nameAz: '20 Yanvar', lines: ['green'] },
  { id: 'inshaatchilar', nameEn: 'Inshaatchilar', nameAz: 'İnşaatçılar', lines: ['green'] },
  { id: 'elmler_akademiyasi', nameEn: 'Elmler Akademiyasi', nameAz: 'Elmlər Akademiyası', lines: ['green'] },
  { id: 'nizami', nameEn: 'Nizami', nameAz: 'Nizami', lines: ['green'] },
  { id: 'jafar_jabbarly', nameEn: 'Jafar Jabbarly', nameAz: 'Cəfər Cabbarlı', lines: ['green'] },
  { id: 'khatai', nameEn: 'Khatai', nameAz: 'Xətai', lines: ['green'] },
  { id: 'khojasan', nameEn: 'Khojasan', nameAz: 'Xocəsən', lines: ['purple'] },
  { id: 'avtovagzal', nameEn: 'Avtovagzal', nameAz: 'Avtovağzal', lines: ['purple'] },
  { id: '8noyabr', nameEn: '8 Noyabr', nameAz: '8 Noyabr', lines: ['purple'] },
  { id: 'b04', nameEn: 'B-04', nameAz: 'B-04', lines: ['purple'] },
];

export const connections: [string, string, Line][] = [
  // Red Line
  ['icherisheher', 'sahil', 'red'],
  ['sahil', '28may', 'red'],
  ['28may', 'ganjlik', 'red'],
  ['ganjlik', 'nariman_narimanov', 'red'],
  ['nariman_narimanov', 'ulduz', 'red'],
  ['ulduz', 'koroglu', 'red'],
  ['koroglu', 'gara_garayev', 'red'],
  ['gara_garayev', 'neftchiler', 'red'],
  ['neftchiler', 'xalqlar_dostlugu', 'red'],
  ['xalqlar_dostlugu', 'ahmadli', 'red'],
  ['ahmadli', 'hazi_aslanov', 'red'],
  ['nariman_narimanov', 'bakmil', 'red'],

  // Green Line
  ['darnagul', 'azadlig_prospekti', 'green'],
  ['azadlig_prospekti', 'nasimi', 'green'],
  ['nasimi', 'memar_ajami', 'green'],
  ['memar_ajami', '20yanvar', 'green'],
  ['20yanvar', 'inshaatchilar', 'green'],
  ['inshaatchilar', 'elmler_akademiyasi', 'green'],
  ['elmler_akademiyasi', 'nizami', 'green'],
  ['nizami', '28may', 'green'],
  ['28may', 'ganjlik', 'green'],
  ['ganjlik', 'nariman_narimanov', 'green'],
  ['nariman_narimanov', 'ulduz', 'green'],
  ['ulduz', 'koroglu', 'green'],
  ['koroglu', 'gara_garayev', 'green'],
  ['gara_garayev', 'neftchiler', 'green'],
  ['neftchiler', 'xalqlar_dostlugu', 'green'],
  ['xalqlar_dostlugu', 'ahmadli', 'green'],
  ['ahmadli', 'hazi_aslanov', 'green'],
  
  // Green Line Shuttle
  ['jafar_jabbarly', 'khatai', 'green'],

  // Purple Line
  ['khojasan', 'avtovagzal', 'purple'],
  ['avtovagzal', 'memar_ajami', 'purple'],
  ['memar_ajami', '8noyabr', 'purple'],
  ['8noyabr', 'b04', 'purple'],
];

export const transfers: [string, string][] = [
  ['28may', 'jafar_jabbarly'],
];

interface GraphEdge {
  to: string;
  weight: number;
  type: 'travel' | 'transfer';
  line?: Line;
}

export const graph: Record<string, GraphEdge[]> = {};

stations.forEach(station => {
  station.lines.forEach(line => {
    const nodeId = `${station.id}_${line}`;
    graph[nodeId] = [];
  });
});

connections.forEach(([from, to, line]) => {
  const fromNode = `${from}_${line}`;
  const toNode = `${to}_${line}`;
  graph[fromNode].push({ to: toNode, weight: 2, type: 'travel', line });
  graph[toNode].push({ to: fromNode, weight: 2, type: 'travel', line });
});

stations.forEach(station => {
  if (station.lines.length > 1) {
    for (let i = 0; i < station.lines.length; i++) {
      for (let j = i + 1; j < station.lines.length; j++) {
        const node1 = `${station.id}_${station.lines[i]}`;
        const node2 = `${station.id}_${station.lines[j]}`;
        graph[node1].push({ to: node2, weight: 3, type: 'transfer' });
        graph[node2].push({ to: node1, weight: 3, type: 'transfer' });
      }
    }
  }
});

transfers.forEach(([st1, st2]) => {
  const st1NodeR = `${st1}_red`;
  const st1NodeG = `${st1}_green`;
  const st2Node = `${st2}_green`;
  
  if (graph[st1NodeR] && graph[st2Node]) {
    graph[st1NodeR].push({ to: st2Node, weight: 3, type: 'transfer' });
    graph[st2Node].push({ to: st1NodeR, weight: 3, type: 'transfer' });
  }
  
  if (graph[st1NodeG] && graph[st2Node]) {
    graph[st1NodeG].push({ to: st2Node, weight: 3, type: 'transfer' });
    graph[st2Node].push({ to: st1NodeG, weight: 3, type: 'transfer' });
  }
});

export interface RouteStep {
  stationId: string;
  line: Line;
  type: 'start' | 'travel' | 'transfer' | 'end';
  time: number;
}

export interface RouteResult {
  steps: RouteStep[];
  totalTime: number;
  totalStops: number;
}

export function findFastestRoute(fromId: string, toId: string): RouteResult | null {
  if (fromId === toId) return null;

  const distances: Record<string, number> = {};
  const previous: Record<string, { node: string; edge: GraphEdge } | null> = {};
  const unvisited = new Set<string>();

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
    unvisited.add(node);
  });

  const startStation = stations.find(s => s.id === fromId);
  const endStation = stations.find(s => s.id === toId);

  if (!startStation || !endStation) return null;

  startStation.lines.forEach(line => {
    distances[`${fromId}_${line}`] = 0;
  });

  while (unvisited.size > 0) {
    let current: string | null = null;
    let minDistance = Infinity;

    unvisited.forEach(node => {
      if (distances[node] < minDistance) {
        minDistance = distances[node];
        current = node;
      }
    });

    if (current === null || minDistance === Infinity) break;

    unvisited.delete(current);

    if (current.startsWith(`${toId}_`)) {
      // Reconstruct path
      const path: RouteStep[] = [];
      let currNode = current;
      let totalTime = distances[currNode];
      let totalStops = 0;

      const rawPath: { node: string; edge: GraphEdge | null }[] = [];
      while (currNode) {
        const prev = previous[currNode];
        rawPath.unshift({ node: currNode, edge: prev ? prev.edge : null });
        if (prev) {
          if (prev.edge.type === 'travel') totalStops++;
          currNode = prev.node;
        } else {
          break;
        }
      }

      for (let i = 0; i < rawPath.length; i++) {
        const [stId, lineStr] = rawPath[i].node.split('_');
        const line = lineStr as Line;
        
        if (i === 0) {
          path.push({ stationId: stId, line, type: 'start', time: 0 });
        } else {
          const edge = rawPath[i].edge!;
          path.push({ stationId: stId, line, type: edge.type, time: edge.weight });
        }
      }

      // Mark the last step as end
      if (path.length > 0) {
        path[path.length - 1].type = 'end';
      }

      return { steps: path, totalTime, totalStops };
    }

    graph[current].forEach(edge => {
      if (!unvisited.has(edge.to)) return;

      const alt = distances[current!] + edge.weight;
      if (alt < distances[edge.to]) {
        distances[edge.to] = alt;
        previous[edge.to] = { node: current!, edge };
      }
    });
  }

  return null;
}
