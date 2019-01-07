
import { defineAPI, GET } from 'rest-ts-core';


// Basic types stubs
const string = '';
const number = 42;
const boolean = true;
const optional = <T>(_: T): T | undefined => void 0;


// Giphy DTO types

const LangCode = string as
    | 'es'
    | 'pt'
    | 'id'
    | 'fr'
    | 'ar'
    | 'tr'
    | 'th'
    | 'vi'
    | 'de'
    | 'it'
    | 'ja'
    | 'zh-CN'
    | 'zh-TW'
    | 'ru'
    | 'ko'
    | 'pl'
    | 'nl'
    | 'ro'
    | 'hu'
    | 'sv'
    | 'cs'
    | 'hi'
    | 'bn'
    | 'da'
    | 'fa'
    | 'tl'
    | 'fi'
    | 'iw'
    | 'ms'
    | 'no'
    | 'uk';


const basicImage = {
    /** The publicly-accessible direct URL for this GIF. */
    url: string,
    /** The width of this GIF in pixels. */
    width: string,
    /** The height of this GIF in pixels. */
    height: string
};

const webp = {
    /** The URL for this GIF in .webp format. */
    webp: string,
    /** The size in bytes of the .webp file corresponding to this GIF. */
    webp_size: string
};

const mp4 = {
    /** The URL for this GIF in .MP4 format. */
    mp4: string,
    /** The size in bytes of the .MP4 file corresponding to this GIF. */
    mp4_size: string
};

const sizeable = {
    /** The size of this GIF in bytes. */
    size: string
};

const fullImage = { ...basicImage, ...sizeable, ...mp4, ...webp };
const imageWithWebp = { ...basicImage, ...sizeable, ...webp };

const ImageObject = {
    /** Data surrounding versions of this GIF with a fixed height of 200 pixels. Good for mobile use.  */
    fixed_height: fullImage,
    /** Data surrounding a static image of this GIF with a fixed height of 200 pixels. */
    fixed_height_still: basicImage,
    /** Data surrounding versions of this GIF with a fixed height of 200 pixels and the number of frames reduced to 6. */
    fixed_height_downsampled: imageWithWebp,
    /** Data surrounding versions of this GIF with a fixed width of 200 pixels. Good for mobile use. */
    fixed_width: fullImage,
    /** Data surrounding a static image of this GIF with a fixed width of 200 pixels. */
    fixed_width_still: basicImage,
    /** Data surrounding versions of this GIF with a fixed width of 200 pixels and the number of frames reduced to 6. */
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
    original: { ...fullImage, frames: string },
    /** Data surrounding a static preview image of the original GIF. */
    original_still: basicImage,
    /** Data surrounding a version of this GIF set to loop for 15 seconds. */
    looping: {
        /** The URL for this GIF in .MP4 format. */
        mp4: string
    },
    /** Data surrounding a version of this GIF in .MP4 format limited to 50kb that displays the first 1-2 seconds of the GIF. */
    preview: {
        ...mp4,
        /** The width of this file in pixels. */
        width: string,
        /** The height of this file in pixels. */
        height: string
    },
    /** Data surrounding a version of this GIF limited to 50kb that displays the first 1-2 seconds of the GIF. */
    preview_gif: { ...basicImage, ...sizeable }
};

const MetaObject = {
    /** HTTP Response Message */
    msg: string,
    /** HTTP Response Code */
    status: number,
    /** A unique ID paired with this response from the API. */
    response_id: string
};

const UserObject = {
    /** The URL for this user's avatar image. */
    avatar_url: string,
    /** The URL for the banner image that appears atop this user's profile page. */
    banner_url: string,
    /** The URL for this user's profile. */
    profile_url: string,
    /** The username associated with this user. */
    username: string,
    /** The display name associated with this user (contains formatting the base username might not). */
    display_name: string,
    /** The Twitter username associated with this user, if applicable. */
    twitter: string
};

const GIFObject = {
    /** By default, this is almost always gif */
    type: string,
    /** This GIF's unique ID */
    id: string,
    /** The unique slug used in this GIF's URL */
    slug: string,
    /** The unique URL for this GIF */
    url: string,
    /** The unique bit.ly URL for this GIF */
    bitly_url: string,
    /** A URL used for embedding this GIF */
    embed_url: string,
    /** The username this GIF is attached to, if applicable */
    username: string,
    /** The page on which this GIF was found */
    source: string,
    /** The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R */
    rating: string,
    /** Currently unused */
    content_url: string,
    /** An object containing data about the user associated with this GIF, if applicable. */
    user: UserObject,
    /** The top level domain of the source URL. */
    source_tld: string,
    /** The URL of the webpage on which this GIF was found. */
    source_post_url: string,
    /** The date on which this GIF was last updated. */
    update_datetime: string,
    /** The date this GIF was added to the GIPHY database. */
    create_datetime: string,
    /** The creation or upload date from this GIF's source. */
    import_datetime: string,
    /** The date on which this gif was marked trending, if applicable. */
    trending_datetime: string,
    /** An object containing data for various available formats and sizes of this GIF. */
    images: ImageObject,
    /** The title that appears on giphy.com for this GIF. */
    title: string,
};


const PaginationObject = {
    /** Position in pagination. */
    offset: number,
    /** Total number of items available. */
    total_count: number,
    /** Total number of items returned. */
    count: number
};

const ChildPackObject = {
    /** This Sticker Pack's unique numeric ID. */
    id: number,
    /** Numeric identifier for the parent Sticker Pack. */
    parent: number,
    /** Will return "community" or "editorial". This describes whether this Sticker Pack is curated by GIPHY or by the community. */
    type: string as 'community' | 'editorial',
    /** Will always return "sticker" in this case. */
    content_type: 'sticker',
    /** URL-friendly name for this Sticker Pack. */
    slug: string,
    /** Human-readable name for this Sticker Pack. (May contain formatting the other names don't). */
    display_name: string,
    /** A more concise version of this Sticker Pack's display name. */
    short_display_name: string,
    /** Long form description of this Sticker Pack. */
    description: string,
    /** Will return a banner image for this Sticker Pack (either JPG, PNG, or GIF) with 1040x160 dimensions. */
    banner_image: string,
    /** Describes whether or not this Sticker Pack contains child Sticker Packs. */
    has_children: boolean,
    /** The GIPHY user associated with this Sticker Pack. */
    user: UserObject,
    /** The GIF that will appear in a thumbnail, header image or other visual representation when referencing this Sticker Pack. */
    featured_gif: GIFObject
};

const StickerPackMetadataObject = {
    /** This Sticker Pack's unique numeric ID. */
    id: number,
    /** Human-readable name for this Sticker Pack. (May contain formatting the other names don't). */
    display_name: string,
    /** URL-friendly slug for this Sticker Pack. */
    slug: string,
    /** Will always return "sticker" in this case. */
    content_type: string,
    /** A more concise version of this Sticker Pack's display name. */
    short_display_name: string,
    /** Long form description of this Sticker Pack. */
    description: string,
    /** Will return a banner image for this Sticker Pack (either JPG, PNG, or GIF) with 1040x160 dimensions. */
    banner_image: string,
    /** Describes whether or not this Sticker Pack contains child Sticker Packs. */
    has_children: boolean,
    /** The GIPHY user associated with this Sticker Pack. */
    user: UserObject,
    /** The GIF that will appear in a thumbnail, header image or other visual representation when referencing this Sticker Pack. */
    featured_gif: GIFObject,
    /** An array of tags which make the sticker packs discoverable via a search */
    tags: [{
        /** The name of an individual tag associated with this Sticker Pack. */
        tag: string,
        /** An ordering of the relevance of this tag to the Sticker Pack. (Begins with 0). */
        rank: number
    }],
    /** An array of all ancestor Sticker Packs. (Sticker packs are hierarchical, all sticker parents descend from the root sticker pack "Stickers".) */
    ancestors: [{
        /** This ancestor Sticker Pack's unique numeric ID. */
        id: number,
        /** URL-friendly name for this ancestor Sticker Pack. */
        slug: string,
        /** Human-readable name for this ancestor Sticker Pack. (May contain formatting the other names don't). */
        display_name: string,
        /** A more concise version of this ancestor Sticker Pack's display name. */
        short_display_name: string,
        /** The ID of the GIF that will appear in a thumbnail, header image or other visual representation when referencing this ancestor Sticker Pack. */
        featured_gif_id: string,
        /** Numeric identifier for the parent Sticker Pack, if applicable. */
        parent: string,
        /** Describes whether or not this ancestor Sticker Pack contains child Sticker Packs. */
        has_children: boolean,
        /** Will return a banner image for this Sticker Pack (either JPG, PNG, or GIF) with 1040x160 dimensions. */
        banner_image: string
    }]
};

const apiKeyQueryParam = {
    /** GIPHY API Key. */
    api_key: string,
};

const fmtQueryParam = {
     /** Used to indicate the expected response format. Default is Json. */
    fmt: optional(string)
};

const searchQueryParams = {
    /** The maximum number of records to return. */
    limit: optional(number),
    /** An optional results offset. Defaults to 0. */
    offset: optional(number),
    /** Filters results by specified rating. */
    rating: optional(string),
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
             * OR boolean clauses in search queries are not supported. 
             */
            q: string,
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
            s: string,
            /** value from 0-10 which makes results more or less weird/random/wtf */
            weirdness: number
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
            tag: optional(string),
            /** Filters results by specified rating. */
            rating: optional(string)
        })
        .response({
            data: [GIFObject],
            meta: MetaObject
        }),

    /** Returns a GIF given that GIF's unique ID */
    getGif: GET `/gifs/${'id'}`
        .query({
            ...apiKeyQueryParam
        })
        .response({
            data: [GIFObject],
            meta: MetaObject
        }),

    /** A multiget version of the get GIF by ID endpoint. */
    getGifs: GET `/gifs`
        .query({
            ...apiKeyQueryParam,
            /** Filters results by specified GIF IDs, separated by commas. */
            ids: string
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
             * OR boolean clauses in search queries are not supported. 
             */
            q: string,
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
            /** The maximum number of records to return. */
            limit: optional(number),
            /** Filters results by specified rating. */
            rating: optional(string),
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
            s: string
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
            tag: optional(string),
            /** Filters results by specified rating. */
            rating: optional(string),
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
            /** The maximum number of records to return. */
            limit: optional(number),
            /** An optional results offset. Defaults to 0. */
            offset: optional(number),
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
            /** The maximum number of records to return. */
            limit: optional(number),
            /** An optional results offset. Defaults to 0. */
            offset: optional(number),
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
