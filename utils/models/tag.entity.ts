export class TagEntity {
  created_at: string
  deleted_at: null
  id: number
  media: []
  name: string
  pivot: { category_id: number; tag_id: number }
  seo_description: string
  seo_keyphrases: string
  seo_title: string
  slug: string
  updated_at: string
}
