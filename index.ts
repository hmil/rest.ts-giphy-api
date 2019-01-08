
import { defineAPI, GET } from 'rest-ts-core';
import { Array, String, Number, Boolean, Union, Literal, Record, Intersect } from 'runtypes';


// Basic types stubs
const optional = <T>(_: T): T | undefined => void 0;


// Giphy DTO types

const LangCode = Union(
    Union(
    Literal('es'),
    Literal('pt'),
    Literal('id'),
    Literal('fr'),
    Literal('ar'),
    Literal('tr'),
    Literal('th'),
    Literal('vi'),
    Literal('de'),
    Literal('it'),
    Literal('ja'),
    Literal('zh-CN'),
    Literal('zh-TW'),
    Literal('ru'),
    Literal('ko'),
    Literal('pl'),
    Literal('nl'),
    Literal('ro'),
    Literal('hu'),
    Literal('sv'),
    ), Union(
    Literal('cs'),
    Literal('hi'),
    Literal('bn'),
    Literal('da'),
    Literal('fa'),
    Literal('tl'),
    Literal('fi'),
    Literal('iw'),
    Literal('ms'),
    Literal('no'),
    Literal('uk')
    ));


const basicImage = Record({
    /** The publicly-accessible direct URL for this GIF. */
    url: String,
    /** The width of this GIF in pixels. */
    width: String,
    /** The height of this GIF in pixels. */
    height: String
});

const webp = Record({
    /** The URL for this GIF in .webp format. */
    webp: String,
    /** The size in bytes of the .webp file corresponding to this GIF. */
    webp_size: String
});

const mp4 = Record({
    /** The URL for this GIF in .MP4 format. */
    mp4: String,
    /** The size in bytes of the .MP4 file corresponding to this GIF. */
    mp4_size: String
});

const sizeable = Record({
    /** The size of this GIF in bytes. */
    size: String
});

const fullImage = Intersect(basicImage, sizeable, mp4, webp);
const imageWithWebp = Intersect(basicImage, sizeable, webp);

const ImageObject = Record({
    /** Data surrounding versions of this GIF with a fixed height of 200 pixels. Good for mobile use.  */
    fixed_height: fullImage,
    /** Data surrounding a static image of this GIF with a fixed height of 200 pixels. */
    fixed_height_still: basicImage,
    /** Data surrounding versions of this GIF with a fixed height of 200 pixels and the Number of frames reduced to 6. */
    fixed_height_downsampled: imageWithWebp,
    /** Data surrounding versions of this GIF with a fixed width of 200 pixels. Good for mobile use. */
    fixed_width: fullImage,
    /** Data surrounding a static image of this GIF with a fixed width of 200 pixels. */
    fixed_width_still: basicImage,
    /** Data surrounding versions of this GIF with a fixed width of 200 pixels and the Number of frames reduced to 6. */
    fixed_width_downsampled: imageWithWebp,
    /** Data surrounding versions of this GIF with a fixed height of 100 pixels. Good for mobile keyboards. */
    fixed_height_small: imageWithWebp,
    /** Data surrounding a static image of this GIF with a fixed height of 100 pixels. */
    fixed_height_small_still: basicImage,
    /** Data surrounding versions of this GIF with a fixed width of 100 pixels. Good for mobile keyboards. */
    fixed_width_small: imageWithWebp,
    /** Data surrounding a static image of this GIF with a fixed width of 100 pixels. */
    fixed_width_small_still: basicImage,
    /** Data surrounding a version of this GIF downsized to be under 2mb. */
    downsized: { ...basicImage, ...sizeable },
    /** Data surrounding a static preview image of the downsized version of this GIF. */
    downsized_still: basicImage,
    /** Data surrounding a version of this GIF downsized to be under 8mb. */
    downsized_large: { ...basicImage, ...sizeable },
    /** Data surrounding a version of this GIF downsized to be under 5mb. */
    downsized_medium: { ...basicImage, ...sizeable },
    /** Data surrounding a version of this GIF downsized to be under 200kb. */
    downsized_small: {...basicImage, ...sizeable },
    /** Data surrounding the original version of this GIF. Good for desktop use. */
    original: { ...fullImage, frames: String },
    /** Data surrounding a static preview image of the original GIF. */
    original_still: basicImage,
    /** Data surrounding a version of this GIF set to loop for 15 seconds. */
    looping: Record({
        /** The URL for this GIF in .MP4 format. */
        mp4: String
    }),
    /** Data surrounding a version of this GIF in .MP4 format limited to 50kb that displays the first 1-2 seconds of the GIF. */
    preview: Intersect(mp4, Record({
        /** The width of this file in pixels. */
        width: String,
        /** The height of this file in pixels. */
        height: String
    })),
    /** Data surrounding a version of this GIF limited to 50kb that displays the first 1-2 seconds of the GIF. */
    preview_gif: Intersect(basicImage, sizeable)
});

const MetaObject = Record({
    /** HTTP Response Message */
    msg: String,
    /** HTTP Response Code */
    status: Number,
    /** A unique ID paired with this response from the API. */
    response_id: String
});

const UserObject = Record({
    /** The URL for this user's avatar image. */
    avatar_url: String,
    /** The URL for the banner image that appears atop this user's profile page. */
    banner_url: String,
    /** The URL for this user's profile. */
    profile_url: String,
    /** The username associated with this user. */
    username: String,
    /** The display name associated with this user (contains formatting the base username might not). */
    display_name: String,
    /** The Twitter username associated with this user, if applicable. */
    twitter: String
});

const GIFObject = Record({
    /** By default, this is almost always gif */
    type: String,
    /** This GIF's unique ID */
    id: String,
    /** The unique slug used in this GIF's URL */
    slug: String,
    /** The unique URL for this GIF */
    url: String,
    /** The unique bit.ly URL for this GIF */
    bitly_url: String,
    /** A URL used for embedding this GIF */
    embed_url: String,
    /** The username this GIF is attached to, if applicable */
    username: String,
    /** The page on which this GIF was found */
    source: String,
    /** The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R */
    rating: String,
    /** Currently unused */
    content_url: String,
    /** An object containing data about the user associated with this GIF, if applicable. */
    user: UserObject,
    /** The top level domain of the source URL. */
    source_tld: String,
    /** The URL of the webpage on which this GIF was found. */
    source_post_url: String,
    /** The date on which this GIF was last updated. */
    update_datetime: String,
    /** The date this GIF was added to the GIPHY database. */
    create_datetime: String,
    /** The creation or upload date from this GIF's source. */
    import_datetime: String,
    /** The date on which this gif was marked trending, if applicable. */
    trending_datetime: String,
    /** An object containing data for various available formats and sizes of this GIF. */
    images: ImageObject,
    /** The title that appears on giphy.com for this GIF. */
    title: String,
});


const PaginationObject = Record({
    /** Position in pagination. */
    offset: Number,
    /** Total Number of items available. */
    total_count: Number,
    /** Total Number of items returned. */
    count: Number
});

const ChildPackObject = Record({
    /** This Sticker Pack's unique numeric ID. */
    id: Number,
    /** Numeric identifier for the parent Sticker Pack. */
    parent: Number,
    /** Will return "community" or "editorial". This describes whether this Sticker Pack is curated by GIPHY or by the community. */
    type: Union(Literal('community'), Literal('editorial')),
    /** Will always return "sticker" in this case. */
    content_type: Literal('sticker'),
    /** URL-friendly name for this Sticker Pack. */
    slug: String,
    /** Human-readable name for this Sticker Pack. (May contain formatting the other names don't). */
    display_name: String,
    /** A more concise version of this Sticker Pack's display name. */
    short_display_name: String,
    /** Long form description of this Sticker Pack. */
    description: String,
    /** Will return a banner image for this Sticker Pack (either JPG, PNG, or GIF) with 1040x160 dimensions. */
    banner_image: String,
    /** Describes whether or not this Sticker Pack contains child Sticker Packs. */
    has_children: Boolean,
    /** The GIPHY user associated with this Sticker Pack. */
    user: UserObject,
    /** The GIF that will appear in a thumbnail, header image or other visual representation when referencing this Sticker Pack. */
    featured_gif: GIFObject
});

const StickerPackMetadataObject = Record({
    /** This Sticker Pack's unique numeric ID. */
    id: Number,
    /** Human-readable name for this Sticker Pack. (May contain formatting the other names don't). */
    display_name: String,
    /** URL-friendly slug for this Sticker Pack. */
    slug: String,
    /** Will always return "sticker" in this case. */
    content_type: String,
    /** A more concise version of this Sticker Pack's display name. */
    short_display_name: String,
    /** Long form description of this Sticker Pack. */
    description: String,
    /** Will return a banner image for this Sticker Pack (either JPG, PNG, or GIF) with 1040x160 dimensions. */
    banner_image: String,
    /** Describes whether or not this Sticker Pack contains child Sticker Packs. */
    has_children: Boolean,
    /** The GIPHY user associated with this Sticker Pack. */
    user: UserObject,
    /** The GIF that will appear in a thumbnail, header image or other visual representation when referencing this Sticker Pack. */
    featured_gif: GIFObject,
    /** An array of tags which make the sticker packs discoverable via a search */
    tags: Array(Record({
        /** The name of an individual tag associated with this Sticker Pack. */
        tag: String,
        /** An ordering of the relevance of this tag to the Sticker Pack. (Begins with 0). */
        rank: Number
    })),
    /** An array of all ancestor Sticker Packs. (Sticker packs are hierarchical, all sticker parents descend from the root sticker pack "Stickers".) */
    ancestors: Array(Record({
        /** This ancestor Sticker Pack's unique numeric ID. */
        id: Number,
        /** URL-friendly name for this ancestor Sticker Pack. */
        slug: String,
        /** Human-readable name for this ancestor Sticker Pack. (May contain formatting the other names don't). */
        display_name: String,
        /** A more concise version of this ancestor Sticker Pack's display name. */
        short_display_name: String,
        /** The ID of the GIF that will appear in a thumbnail, header image or other visual representation when referencing this ancestor Sticker Pack. */
        featured_gif_id: String,
        /** Numeric identifier for the parent Sticker Pack, if applicable. */
        parent: String,
        /** Describes whether or not this ancestor Sticker Pack contains child Sticker Packs. */
        has_children: Boolean,
        /** Will return a banner image for this Sticker Pack (either JPG, PNG, or GIF) with 1040x160 dimensions. */
        banner_image: String
    }))
});

const apiKeyQueryParam = {
    /** GIPHY API Key. */
    api_key: String,
};

const fmtQueryParam = {
     /** Used to indicate the expected response format. Default is Json. */
    fmt: optional(String)
};

const searchQueryParams = {
    /** The maximum Number of records to return. */
    limit: optional(Number),
    /** An optional results offset. Defaults to 0. */
    offset: optional(Number),
    /** Filters results by specified rating. */
    rating: optional(String),
};

export const giphyAPI = defineAPI({

    /**
     * Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.
     * Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
     */
    searchGifs: GET `/gifs/search`
        .query({
            ...apiKeyQueryParam,
            ...searchQueryParams,
            ...fmtQueryParam,
            /** 
             * Search query term or phrase.
             * GIPHY search will automatically look for exact matches to queries + AND match + OR match. Explicit AND + 
             * OR Boolean clauses in search queries are not supported. 
             */
            q: String,
            /** 
             * Specify default country for regional content; format is 2-letter ISO 639-1 country code. 
             * See list of supported languages [here](https://developers.giphy.com/docs/#language-support) 
             */
            lang: LangCode
        })
        .response({
            data: [GIFObject],
            pagination: PaginationObject,
            meta: MetaObject
        }),

    /**
     * Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team. 
     * The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.
     */
    getTrendingGifs: GET `/gifs/trending`
        .query({
            ...apiKeyQueryParam,
            ...searchQueryParams,
            ...fmtQueryParam
        })
        .response({
            data: [GIFObject],
            pagination: PaginationObject,
            meta: MetaObject,
        }),

    /**
     * The translate API draws on search, but uses the GIPHY special sauce to handle translating from one vocabulary to
     * another. In this case, words and phrases to GIFs.
     */
    translate: GET `/gifs/translate`
        .query({
            ...apiKeyQueryParam,
            /** Search term. */
            s: String,
            /** value from 0-10 which makes results more or less weird/random/wtf */
            weirdness: Number
        })
        .response({
            data: GIFObject,
            meta: MetaObject
        }),

    /** Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog. */
    getRandomGif: GET `/gifs/random`
        .query({
            ...apiKeyQueryParam,
            ...fmtQueryParam,
            /** Filters results by specified tag. */
            tag: optional(String),
            /** Filters results by specified rating. */
            rating: optional(String)
        })
        .response({
            data: GIFObject,
            meta: MetaObject
        }),

    /** Returns a GIF given that GIF's unique ID */
    getGif: GET `/gifs/${'id'}`
        .query({
            ...apiKeyQueryParam
        })
        .response({
            data: GIFObject,
            meta: MetaObject
        }),

    /** A multiget version of the get GIF by ID endpoint. */
    getGifs: GET `/gifs`
        .query({
            ...apiKeyQueryParam,
            /** Filters results by specified GIF IDs, separated by commas. */
            ids: String
        })
        .response({
            data: [GIFObject],
            pagination: PaginationObject,
            meta: MetaObject
        }),

    /** Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs. */
    searchStickers: GET `/stickers/search`
        .query({
            ...apiKeyQueryParam,
            ...searchQueryParams,
            ...fmtQueryParam,
            /** 
             * Search query term or phrase.
             * GIPHY search will automatically look for exact matches to queries + AND match + OR match. Explicit AND + 
             * OR Boolean clauses in search queries are not supported. 
             */
            q: String,
            /** 
             * Specify default country for regional content; format is 2-letter ISO 639-1 country code. 
             * See list of supported languages [here](https://developers.giphy.com/docs/#language-support) 
             */
            lang: LangCode
        })
        .response({
            data: [GIFObject],
            pagination: PaginationObject,
            meta: MetaObject
        }),

    /** Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default. */
    getTrendingStickers: GET `/stickers/trending`
        .query({
            ...apiKeyQueryParam,
            ...fmtQueryParam,
            /** The maximum Number of records to return. */
            limit: optional(Number),
            /** Filters results by specified rating. */
            rating: optional(String),
        })
        .response({
            data: [GIFObject],
            meta: MetaObject
        }),

    /** 
     * The translate API draws on search, but uses the GIPHY special sauce to handle translating from one vocabulary to
     * another. In this case, words and phrases to GIFs.
     */
    translateStickers: GET `/stickers/translate`
        .query({
            ...apiKeyQueryParam,
            /** Search term. */
            s: String
        })
        .response({
            data: GIFObject,
            meta: MetaObject
        }),

    /** 
     * Returns a random Sticker, limited by tag. Excluding the tag parameter will return a random Sticker from the 
     * GIPHY catalog.
     */
    getRandomStickers: GET `/stickers/random`
        .query({
            ...apiKeyQueryParam,
            ...fmtQueryParam,
            /** Filters results by specified tag. */
            tag: optional(String),
            /** Filters results by specified rating. */
            rating: optional(String),
        })
        .response({
            data: [GIFObject],
            meta: MetaObject
        }),

    /** Returns a list of all sticker packs available. Hand-curated by the GIPHY editorial team. */
    getStickerPacks: GET `/stickers/packs`
        .query({
            ...apiKeyQueryParam
        })
        .response({
            data: [ChildPackObject],
            meta: MetaObject
        }),

    /** 
     * Returns the metadata for any Sticker pack. Note that convenience URLs for GIPHY's curated Trending and 
     * Reactions Sticker Packs exist at /v1/stickers/packs/trending and /v1/stickers/packs/reactions, respectively. 
     */
    getStickerPack: GET `/stickers/packs/${'pack_id'}`
        .query({
            ...apiKeyQueryParam,
            /** The maximum Number of records to return. */
            limit: optional(Number),
            /** An optional results offset. Defaults to 0. */
            offset: optional(Number),
        })
        .response({
            data: [StickerPackMetadataObject],
            meta: MetaObject
        }),

    /**
     * Returns the stickers within an individual sticker pack. Note that convenience URLs for GIPHY's curated Trending
     * and Reactions Sticker Packs exist at /v1/stickers/packs/trending/stickers and
     * /v1/stickers/packs/reactions/stickers, respectively.
     */
    getStickerPacksStickers: GET `/stickers/packs/${'pack_id'}/stickers`
        .query({
            ...apiKeyQueryParam,
            /** The maximum Number of records to return. */
            limit: optional(Number),
            /** An optional results offset. Defaults to 0. */
            offset: optional(Number),
        })
        .response({
            data: [GIFObject],
            pagination: PaginationObject,
            meta: MetaObject
        }),

    /**
     * A Sticker pack is a recursive data structure and so packs may contain other packs. For example, the 'Reactions'
     * pack would have an 'OMG' child pack. This endpoint lists all children packs of a given Sticker pack. Note that
     * convenience URLs for GIPHY's curated Trending and Reactions Sticker Packs exist at
     * /v1/stickers/packs/trending/children and /v1/stickers/packs/reactions/children, respectively.
     */
    getStickerPackChildren: GET `/stickers/packs/${'pack_id'}/children`
        .query({
            ...apiKeyQueryParam
        })
        .response({
            data: [ChildPackObject],
            meta: MetaObject
        })
});
