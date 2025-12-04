import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import caseStudyHero from "@/assets/case study.png";
import caseStudyOne from "@/assets/casestudy.png";
import caseStudyTwo from "@/assets/cases.png";
import caseStudyThree from "@/assets/casest.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { fetchCaseStudies, type CaseStudyApiItem } from "@/api/case-study";
import { LexicalContent } from "@/components/lexical-content";
import SEO from "@/components/SEO";

const placeholderImages = [caseStudyOne, caseStudyTwo, caseStudyThree];

type StructuredCaseStudyContent = {
  challenges: string[];
  solutionHighlights: { title: string; description: string }[];
  results: string[];
  conclusion: string;
};

type CaseStudyCard = {
  id: string;
  title: string;
  headline: string;
  overview: string;
  image: string;
  isStructured: boolean;
  richContent?: string | null;
  content: StructuredCaseStudyContent;
};

const CaseStudies = () => {
  const statsRef = useScrollAnimation();
  const [apiCaseStudies, setApiCaseStudies] = useState<CaseStudyApiItem[]>([]);
  const [hasError, setHasError] = useState(false);

  // Framer Motion refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const stats = [
    { value: "20%+", label: "Average OpEx Reduction" },
    { value: "30%", label: "Cost Savings Achieved" },
    { value: "100%", label: "Compliance Success" },
    { value: "98%", label: "Resident Satisfaction" },
  ];

  const caseStudies = useMemo(() => {
    if (apiCaseStudies.length === 0) {
      // Fallback to existing static content if API fails or has no data
      return [
        {
          id: "01",
          title: "Case Study 1",
          headline:
            "Full Community Transformation Across Compliance, Operations & Resident Satisfaction",
          overview:
            "A residential community in Dubai required a complete reset across governance, facility operations, and resident engagement. The community suffered from inconsistent maintenance, regulatory gaps, and rising resident dissatisfaction. Our team was appointed to establish stability and build a long-term management framework.",
          image: caseStudyOne,
          content: {
            challenges: [
              "Important documents missing in RERA and the Mollak system",
              "No proper community rules or governance structure",
              "Poor maintenance of fire systems, swimming pool, and shared facilities",
              "Cleaning and pest control inconsistencies",
              "Confusing budgeting and unclear vendor invoices",
              "Slow communication and frequent resident complaints",
            ],
            solutionHighlights: [
              {
                title: "Compliance & Governance Reset",
                description:
                  "Updated all required documentation in RERA and Mollak, developed community rules, maintenance manuals, and instituted structured owners’ committee meetings with transparent reporting.",
              },
              {
                title: "Operational Stabilization",
                description:
                  "Appointed vetted service providers with clear KPIs, introduced preventive maintenance schedules for fire safety systems, pool care, water tank cleaning, and general hygiene with a full asset register.",
              },
              {
                title: "Financial Transparency",
                description:
                  "Prepared transparent annual budgets, audited vendor contracts, and renegotiated terms to improve cost efficiency while monitoring performance-based contracts.",
              },
              {
                title: "Resident Engagement",
                description:
                  "Launched a dedicated communication portal to improve response times, share updates, and manage resident enquiries in real time.",
              },
            ],
            results: [
              "Full compliance achieved with RERA and Jointly Owned Property Law",
              "Improved maintenance quality across all shared areas",
              "Over 20% reduction in operational expenses",
              "Faster response times and a major drop in resident complaints",
              "Clear documentation, transparent financial reporting, and stronger governance",
            ],
            conclusion:
              "The community transitioned from instability to a well-organized, safe, and professionally managed environment with significantly higher resident satisfaction.",
          },
        },
        {
          id: "02",
          title: "Case Study 2",
          headline: "Financial Restructuring & Vendor Optimization",
          overview:
            "A multi-building residential development in Dubai approached us due to rising service charges, unclear financial reporting, and declining trust from owners. The goal was to bring transparency, reduce unnecessary expenses, and establish a sustainable financial structure.",
          image: caseStudyTwo,
          content: {
            challenges: [
              "Budgets not aligned with actual community needs",
              "High service expenses with little justification",
              "Vendors operating without performance tracking",
              "Service charges perceived as unfair by owners",
              "No proper reserve fund planning",
            ],
            solutionHighlights: [
              {
                title: "Comprehensive Financial Audit",
                description:
                  "Reviewed historical budgets, vendor costs, and service contracts to create realistic operational and reserve fund budgets tied to long-term planning.",
              },
              {
                title: "Vendor Optimization",
                description:
                  "Re-tendered major services, negotiated competitive pricing, and introduced KPI-linked contracts to ensure accountable, consistent service delivery.",
              },
              {
                title: "Transparent Reporting",
                description:
                  "Implemented quarterly financial reporting aligned with RERA and Mollak guidelines, giving owners clear visibility into expenses, income, and fund allocation.",
              },
            ],
            results: [
              "22–30% yearly cost savings through restructured contracts",
              "Transparent financial statements shared quarterly",
              "Improved trust between homeowners and management",
              "Vendors held accountable through performance monitoring",
              "Stronger reserve fund planning for long-term infrastructure needs",
            ],
            conclusion:
              "The community achieved financial stability, predictable service charges, and greater owner confidence through clear budgeting and improved vendor management.",
          },
        },
        {
          id: "03",
          title: "Case Study 3",
          headline: "Enhancing Facility Operations & Safety Standards",
          overview:
            "A low-rise residential community faced growing concerns about safety, cleanliness, and maintenance quality. The property lacked structured maintenance planning, and residents reported frequent issues with hygiene and facility reliability.",
          image: caseStudyThree,
          content: {
            challenges: [
              "Irregular cleaning and poor common-area hygiene",
              "Swimming pool water quality issues",
              "Fire safety systems overdue for inspection",
              "Pest control inconsistencies causing resident complaints",
              "No preventive maintenance plan, only reactive repairs",
            ],
            solutionHighlights: [
              {
                title: "Preventive Maintenance Program",
                description:
                  "Introduced scheduled preventive maintenance for all facilities with professional partners for cleaning, pest control, pool care, and fire safety systems.",
              },
              {
                title: "Safety & Compliance Review",
                description:
                  "Conducted full safety audits including fire alarm testing, emergency lighting checks, water tank cleaning, and safety signage upgrades with monthly inspection reports.",
              },
              {
                title: "Resident Communication",
                description:
                  "Shared maintenance schedules, safety alerts, and water-quality reports to keep residents informed and confident in facility operations.",
              },
            ],
            results: [
              "Zero safety violations after implementing updated safety measures",
              "Noticeable improvement in pool hygiene, shared-area cleanliness, and pest control",
              "Reduction in unplanned repair costs due to preventive maintenance",
              "Increased resident satisfaction with facility reliability",
              "Improved overall safety and comfort levels throughout the community",
            ],
            conclusion:
              "Through structured maintenance planning and upgraded safety standards, the community achieved cleaner spaces, safer facilities, and a more reliable living environment.",
          },
        },
      ] as CaseStudyCard[];
    }

    // Map API items into display cards used by the UI
    return apiCaseStudies.map((item, index) => {
      let parsed: Partial<StructuredCaseStudyContent> = {};

      if (item.bolIsStructuredFormat && item.strStructuredContent) {
        try {
          parsed = JSON.parse(item.strStructuredContent) as StructuredCaseStudyContent;
        } catch {
          parsed = {};
        }
      }

      const content: StructuredCaseStudyContent = {
        challenges: parsed.challenges ?? [],
        solutionHighlights: parsed.solutionHighlights ?? [],
        results: parsed.results ?? [],
        // For non-structured case studies, fall back to the overview text
        conclusion:
          parsed.conclusion ??
          item.strOverview ??
          "This case study explores how we helped our client achieve measurable impact.",
      };

      return {
        id: String(index + 1).padStart(2, "0"),
        title: item.Category?.strCategoryName || `Case Study ${index + 1}`,
        headline: item.strTitle,
        overview:
          item.strOverview ||
          "Real-world example of how we helped a community achieve measurable impact.",
        image: item.strCoverImage || placeholderImages[index % placeholderImages.length],
        isStructured: Boolean(item.bolIsStructuredFormat && item.strStructuredContent),
        richContent: item.strContent ?? null,
        content,
      } as CaseStudyCard;
    });
  }, [apiCaseStudies]);

  useEffect(() => {
    let isMounted = true;

    const loadCaseStudies = async () => {
      try {
        setHasError(false);

        const items = await fetchCaseStudies();
        if (!isMounted) return;

        setApiCaseStudies(items);
      } catch (error) {
        console.error("Failed to load case studies", error);
        if (isMounted) {
          setHasError(true);
        }
      }
    };

    void loadCaseStudies();

    return () => {
      isMounted = false;
    };
  }, []);

  // Derive SEO metadata from the first API case study if available
  const primaryCaseStudy = apiCaseStudies[0];
  const fallbackTitle = "Case Studies | Pristine Management Services";
  const fallbackDescription =
    "Explore real-world case studies from the UAE showcasing how Pristine Management Services improves operations, compliance, and resident satisfaction.";
  const fallbackKeywords =
    "case study, community management, property management, UAE, Pristine Management Services";

  const metaTitle =
    (primaryCaseStudy?.strMetaTitle as string | undefined) ||
    primaryCaseStudy?.strTitle ||
    fallbackTitle;

  const metaDescription =
    (primaryCaseStudy?.strMetaDescription as string | undefined) ||
    primaryCaseStudy?.strOverview ||
    fallbackDescription;

  const metaKeywords =
    (primaryCaseStudy?.strMetaKeywords as string | undefined) || fallbackKeywords;

  const getImagePath = (imageUrl?: string | null): string | undefined => {
    if (!imageUrl) return undefined;
    try {
      const url = new URL(imageUrl);
      return url.pathname;
    } catch {
      return imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
    }
  };

  const ogImage = getImagePath(primaryCaseStudy?.strCoverImage);

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        image={ogImage}
        type="website"
      />
    <div className="bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                Proven Impact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-premium font-bold mb-6 leading-tight">
                Case Studies <span className="text-primary font-accent text-5xl">from the UAE</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Real examples of how we stabilize communities, elevate operations, and restore resident confidence through
                data-driven management.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <Card key={index} className="p-5 border-border/50 bg-white/80 backdrop-blur-sm hover-lift">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                {[caseStudyHero, caseStudyOne, caseStudyTwo, caseStudyThree].map((image, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-2xl border border-white/40 ${
                      index % 2 === 0 ? "translate-y-4" : "-translate-y-4"
                    }`}
                  >
                    <img src={image} alt="Case Study collage" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Snapshot Stats */}
      <section ref={statsRef.ref} className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={statsRef.isVisible ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 text-center bg-white border border-border/50 shadow-sm">
                  <div className="text-3xl font-heading font-premium font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          className={`py-16 lg:py-20 ${index % 2 !== 0 ? "bg-gradient-to-br from-background via-muted/40 to-background" : "bg-background"}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  <span className="w-8 h-px bg-border" />
                  {`CASE STUDY ${index + 1}`}
                  <span className="w-8 h-px bg-border" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-premium font-bold mb-4 leading-tight">{study.headline}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{study.overview}</p>

                {study.isStructured ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-heading font-premium font-semibold mb-3">Challenges</h3>
                      <ul className="space-y-3">
                        {study.content.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-premium font-semibold mb-3">Solutions Implemented</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {study.content.solutionHighlights.map((solution, idx) => (
                          <Card key={idx} className="p-5 h-full bg-white border border-border/40 shadow-sm">
                            <h4 className="text-base font-premium font-semibold mb-2 text-foreground">{solution.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-premium font-semibold mb-3">Results</h3>
                      <ul className="space-y-3">
                        {study.content.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 border-none shadow-lg">
                      <p className="text-base text-foreground leading-relaxed font-premium font-semibold">
                        {study.content.conclusion}
                      </p>
                    </Card>
                  </div>
                ) : (
                  <LexicalContent
                    serializedContent={study.richContent}
                    fallbackText={study.overview}
                  />
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                  <img src={study.image} alt={study.headline} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary">
                    {study.title}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
    </>
  );
};

export default CaseStudies;
