import type { CaseStudy } from '../types';
import { lyra } from './lyra';
import { bucketize } from './bucketize';

export const caseStudies: CaseStudy[] = [lyra, bucketize];
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
