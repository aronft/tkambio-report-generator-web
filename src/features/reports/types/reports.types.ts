export interface Report {
  id: number
  title: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  download_url: string
  created_at: string
}

export interface ReportGeneratorPayload {
  title: string
  dateInit: string
  dateEnd: string
}
