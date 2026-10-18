import type { CaseStudy } from '../types';
import { k2PracticeGames } from './k2-practice-games';
import { lyra } from './lyra';
import { bucketize } from './bucketize';

export const caseStudies: CaseStudy[] = [k2PracticeGames, lyra, bucketize];
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
