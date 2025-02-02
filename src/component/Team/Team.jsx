'use client'
import Link from 'next/link';
import styles from './Team.module.css';
import { CldImage } from 'next-cloudinary';


const Team = ({data}) => {
  return (
    <div className={styles.grid}>
    {data.map((person) => (
      <div key={person.slug} className={styles.card}>
        <div className={styles.cover}>
          <Link href={`/profile?source=${person.slug}`}>
            Profile
          </Link>
        </div>
        <CldImage 
        src={person.image_pb_id}
        alt='profile'
        className={styles.image}
        width={100}
        height={100}
        />
      </div>
    ))}
  </div>
  
  );
};

export default Team;