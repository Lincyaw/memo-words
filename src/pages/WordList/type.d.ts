export type Root = {
    id: string
    metadata: Metadata
    results: Result[]
    word: string
  }
  
  export interface Metadata {
    operation: string
    provider: string
    schema: string
  }
  
  export interface Result {
    id: string
    language: string
    lexicalEntries: LexicalEntry[]
    type: string
    word: string
  }
  
  export interface LexicalEntry {
    entries: Entry[]
    language: string
    lexicalCategory: LexicalCategory
    phrases?: Phrase[]
    text: string
  }
  
  export interface Entry {
    etymologies?: string[]
    homographNumber: string
    pronunciations: Pronunciation[]
    senses: Sense[]
    grammaticalFeatures?: GrammaticalFeature[]
  }
  
  export interface Pronunciation {
    audioFile: string
    dialects: string[]
    phoneticNotation: string
    phoneticSpelling: string
  }
  
  export interface Sense {
    definitions: string[]
    examples: Example[]
    id: string
    registers?: Register2[]
    shortDefinitions: string[]
    synonyms?: Synonym[]
    thesaurusLinks?: ThesaurusLink[]
    domainClasses?: DomainClass[]
    semanticClasses?: SemanticClass[]
    subsenses?: Subsense[]
    regions?: Region[]
  }
  
  export interface Example {
    text: string
    registers?: Register[]
    notes?: Note[]
  }
  
  export interface Register {
    id: string
    text: string
  }
  
  export interface Note {
    text: string
    type: string
  }
  
  export interface Register2 {
    id: string
    text: string
  }
  
  export interface Synonym {
    language: string
    text: string
  }
  
  export interface ThesaurusLink {
    entry_id: string
    sense_id: string
  }
  
  export interface DomainClass {
    id: string
    text: string
  }
  
  export interface SemanticClass {
    id: string
    text: string
  }
  
  export interface Subsense {
    definitions: string[]
    domainClasses?: DomainClass2[]
    domains?: Domain[]
    examples: Example2[]
    id: string
    shortDefinitions: string[]
    notes?: Note2[]
    registers?: Register3[]
    semanticClasses?: SemanticClass2[]
  }
  
  export interface DomainClass2 {
    id: string
    text: string
  }
  
  export interface Domain {
    id: string
    text: string
  }
  
  export interface Example2 {
    text: string
  }
  
  export interface Note2 {
    text: string
    type: string
  }
  
  export interface Register3 {
    id: string
    text: string
  }
  
  export interface SemanticClass2 {
    id: string
    text: string
  }
  
  export interface Region {
    id: string
    text: string
  }
  
  export interface GrammaticalFeature {
    id: string
    text: string
    type: string
  }
  
  export interface LexicalCategory {
    id: string
    text: string
  }
  
  export interface Phrase {
    id: string
    text: string
  }
  