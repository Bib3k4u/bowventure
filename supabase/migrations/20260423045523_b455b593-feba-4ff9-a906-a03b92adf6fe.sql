CREATE TABLE public.quotation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference TEXT NOT NULL UNIQUE,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  incoterm TEXT NOT NULL DEFAULT 'EXW Kathmandu',
  shipping_address TEXT,
  message TEXT,
  items JSONB NOT NULL,
  subtotal_usd NUMERIC(12,2) NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.quotation_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (including unauthenticated visitors) can submit a quotation request
CREATE POLICY "Anyone can submit a quotation request"
  ON public.quotation_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No public read/update/delete policies — only service role (admin) can read submissions.
CREATE INDEX idx_quotation_requests_created_at ON public.quotation_requests (created_at DESC);